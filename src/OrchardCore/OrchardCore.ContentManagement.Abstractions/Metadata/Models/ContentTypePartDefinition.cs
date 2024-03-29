using Newtonsoft.Json.Linq;

namespace OrchardCore.ContentManagement.Metadata.Models
{
    public class ContentTypePartDefinition : ContentDefinition
    {
        public ContentTypePartDefinition(string name, ContentPartDefinition contentPartDefinition, JObject settings)
        {
            Name = name;
            PartDefinition = contentPartDefinition;
            Settings = settings;

            foreach (var field in PartDefinition.Fields)
            {
                field.ContentTypePartDefinition = this;
            }
        }

        public ContentPartDefinition PartDefinition { get; private set; }
        public ContentTypeDefinition ContentTypeDefinition { get; set; }
    }
}
