using System;
using System.IO;
using System.Threading.Tasks;
using SixLabors.Fonts;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats.Gif;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp.Processing;
using SixLabors.Primitives;

namespace EmailTimer1.Services
{
    public class EncodeGifService
    {
        public static async Task<byte[]> Create()
        {
            var width = 100;
            var height = 16;
            using var gif = new Image<Rgba32>(width,height);
            var timeNow = DateTime.Now;
            FontCollection fonts = new FontCollection();
            var arial = SystemFonts.CreateFont("Arial", 16);
            TextGraphicsOptions textGraphicsOptions = new TextGraphicsOptions(true);
 
            for (int i = 1; i < 61; i++)
            {
                var currentTime = timeNow.AddSeconds(-i);
                var subs =
                    $"{currentTime.Hour.ToString()}h {currentTime.Minute.ToString()}m {currentTime.Second.ToString()}s";
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
            await using var ms = new MemoryStream();
            gif.SaveAsGif(ms, new GifEncoder());
            return ms.ToArray();
        }
      
    }
}