using System;
using System.IO;
using System.Threading.Tasks;
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
        public static async Task<byte[]> Create(DateTime targetTime)
        {
            var width = 150;
            var height = 16;
            using var gif = new Image<Rgba32>(width,height);
            await using var ms = new MemoryStream();
            var scopedTime = targetTime;
            FontCollection fonts = new FontCollection();
            var arial = SystemFonts.CreateFont("Arial", 16);
            TextGraphicsOptions textGraphicsOptions = new TextGraphicsOptions(true);
 
            if (DateTime.Now > targetTime)
            {
                using Image<Rgba32> image = new Image<Rgba32>(width, height);
                var messageDone = "Target reached";
                image.Mutate(x => x
                    .BackgroundColor(Color.White)
                    .DrawText(textGraphicsOptions, messageDone, arial, Rgba32.RebeccaPurple, new SixLabors.Primitives.PointF(1, 1)));
                gif.Frames.AddFrame(image.Frames[0]);
                gif.Metadata.GetFormatMetadata(GifFormat.Instance).ColorTableMode = GifColorTableMode.Global;
                gif.Frames.RemoveFrame(0);
                gif.SaveAsGif(ms, new GifEncoder());
                return ms.ToArray();
            }
            
            for (int i = 1; i < 61; i++)
            {
                var currentTime = scopedTime.AddSeconds(-i);
                var daysDelta = (int)(currentTime - DateTime.Now).TotalDays;
                var subs =
                    $"{daysDelta}d {currentTime.Hour.ToString()}h {currentTime.Minute.ToString()}m {currentTime.Second.ToString()}s";
                using Image<Rgba32> image = new Image<Rgba32>(width, height);
                image.Mutate(x => x
                    .BackgroundColor(Color.White)
                    .DrawText(textGraphicsOptions, subs, arial, Rgba32.RebeccaPurple, new SixLabors.Primitives.PointF(1, 1)));
                var frameMetaData = image.Frames.RootFrame.Metadata.GetFormatMetadata(GifFormat.Instance);
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