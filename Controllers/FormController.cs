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
        private readonly FormContext _context;

        public FormController(FormContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [HttpPost]
        public IActionResult SubmitForm([FromBody] FormData formData)
        {
            if (_context != null && formData != null)
            {
                _context.FormDatas.Add(formData);
                _context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest("Context or form data is null.");
            }
        }
    }

}