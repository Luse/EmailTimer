namespace EmailTimer.Models
{
    public class CampaignConfiguration
    {
        public long Id { get; set; }
        public int TimerWidth { get; set; }
        public int TimerHeight { get; set; }
        public string Font { get; set; }
        public string FontColor { get; set; }
        public int FontSize { get; set; }
        public string BackgroundColor { get; set; }
        public string TimeoutText { get; set; }
    }
}