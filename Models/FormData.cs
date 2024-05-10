
namespace surveyyy.Models
{
   public class FormData
{
    public FormData()
    {
        ResponseID=0;
        HeardOfCompany = "";
        DesiredField = "";
        Technologies = new List<string>();
        AboutYourself = "";
    }

    public int ResponseID{get;set;}
    public string HeardOfCompany { get; set; }
    public string DesiredField { get; set; }
    public List<string> Technologies { get; set; }
    public string AboutYourself { get; set; }
} 
}

