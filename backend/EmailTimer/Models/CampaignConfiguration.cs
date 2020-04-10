namespace EmailTimer.Models
{
    public class CampaignConfiguration
    {
        public CampaignConfiguration()
        {
            this.TimerWidth = 210;
            this.TimerHeight = 26;
            this.FontSize = 24;
            this.FontColor = "484C57";
            this.BackgroundColor = "F8F5EF";
            this.TimeoutText = "Target Reached";
            this.Transparent = true;
        }
        public long Id { get; set; }
        public int TimerWidth { get; set; }
        public int TimerHeight { get; set; }
        public string Font { get; set; }
        public string FontColor { get; set; }
        public int FontSize { get; set; }
        public string BackgroundColor { get; set; }
        public  bool Transparent { get; set; }
        public string TimeoutText { get; set; }
    }
}