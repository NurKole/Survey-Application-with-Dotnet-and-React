using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using surveyyy.Models;

namespace surveyyy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        // [HttpPost]
        // public IActionResult SubmitForm([FromBody] FormData formData)
        // {
           
        //      using (var context = new FormContext())
        //      {
        //          context.FormDatas.Add(formData);
        //         context.SaveChanges();
        //      }

        //     return Ok();
        // }
    }
public class FormData
{
    public FormData()
    {
        HeardOfCompany = "";
        DesiredField = "";
        Technologies = new List<string>();
        AboutYourself = "";
    }

    public string HeardOfCompany { get; set; }
    public string DesiredField { get; set; }
    public List<string> Technologies { get; set; }
    public string AboutYourself { get; set; }
}
}