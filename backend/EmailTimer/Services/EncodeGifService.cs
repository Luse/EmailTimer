using System;
using System.IO;
using System.Threading.Tasks;
using EmailTimer.Models;
using SixLabors.Fonts;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats.Gif;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp.Processing;
using SixLabors.Primitives;

namespace EmailTimer.Services
{
    public class EncodeGifService
    {
        public static async Task<byte[]> Create(DateTime targetTime, CampaignConfiguration configuration)
        {
            var width = configuration.TimerWidth;
            var height = configuration.TimerHeight;
            var fontSize = configuration.FontSize;
            var backgroundColor = configuration.Transparent ?  Color.Transparent : Color.FromHex(configuration.BackgroundColor);
            var fontColor =  Color.FromHex(configuration.FontColor);
            var timeoutText = configuration.TimeoutText;
            using var gif = new Image<Rgba32>(width,height);
            await using var ms = new MemoryStream();
            var scopedTime = targetTime;
            FontCollection fonts = new FontCollection();
            var fontFamily = fonts.Install("Fonts/Montserrat-Bold.ttf");
            TextGraphicsOptions textGraphicsOptions = new TextGraphicsOptions( !configuration.Transparent);
            
            if (DateTime.Now > targetTime)
            {
                using Image<Rgba32> image = new Image<Rgba32>(width, height);
                image.Mutate(x => x
                    .BackgroundColor(backgroundColor)
                    .DrawText(textGraphicsOptions, timeoutText, fontFamily.CreateFont(fontSize), fontColor, new SixLabors.Primitives.PointF(5, 1)));
                gif.Frames.AddFrame(image.Frames[0]);
                gif.Metadata.GetFormatMetadata(GifFormat.Instance).ColorTableMode = GifColorTableMode.Global;
                gif.Frames.RemoveFrame(0);
                gif.SaveAsGif(ms, new GifEncoder());
                return ms.ToArray();
            }
            
            for (int i = 1; i < 61; i++)
            {
                var currentTime = scopedTime.AddSeconds(-i);
                var delta = (currentTime - DateTime.Now);
                var daysDelta = (int) delta.TotalDays;
                var hoursDelta = delta.Hours;
                var minutesDelta = delta.Minutes;
                var secondsDelta = delta.Seconds;
                var subs =
                    $"{daysDelta}d {hoursDelta}h {minutesDelta}m {secondsDelta}s";
                using Image<Rgba32> image = new Image<Rgba32>(width, height);
                image.Mutate(x => x
                    .BackgroundColor(backgroundColor)
                    .DrawText(textGraphicsOptions, subs, fontFamily.CreateFont(fontSize), fontColor, new SixLabors.Primitives.PointF(1, 1)));
                var frameMetaData = image.Frames.RootFrame.Metadata.GetFormatMetadata(GifFormat.Instance);
                frameMetaData.DisposalMethod = GifDisposalMethod.RestoreToBackground;
                frameMetaData.FrameDelay = 100;
                gif.Frames.AddFrame(image.Frames[0]);
                gif.Metadata.GetFormatMetadata(GifFormat.Instance).ColorTableMode = GifColorTableMode.Global;

            }
            gif.Frames.RemoveFrame(0);
            gif.SaveAsGif(ms, new GifEncoder());
            return ms.ToArray();
        }
    }
}