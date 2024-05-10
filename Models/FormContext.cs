using Microsoft.EntityFrameworkCore;
using surveyyy.Controllers;

namespace surveyyy.Models
{
    public class FormContext : DbContext
    {
        public FormContext(DbContextOptions<FormContext> options) : base(options) {

         }

        public DbSet<FormData>? FormDatas { get; set; }
    }
}