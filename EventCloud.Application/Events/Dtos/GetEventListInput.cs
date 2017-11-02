namespace EventCloud.Events.Dtos
{
    public class GetEventListInput
    {
        public bool IncludeCanceledEvents { get; set; }
        public string SearchEventTitle { get; set; }
        public bool IncludeFinishedEvents { get; set; }
    }
}