using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using surveyyy.Models;


public class Startup
{
    public IConfiguration Configuration { get; }

    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

public void ConfigureServices(IServiceCollection services)
{
    // IConfiguration arayüzünden bağlantı dizesini al
    string connectionString = Configuration.GetConnectionString("DefaultConnection");

    // Veritabanı bağlantısını ekleyin
    services.AddDbContext<FormContext>(options =>
        options.UseSqlServer(connectionString));
    
    // Diğer hizmetlerin burada kaydedilmesi
}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }
    else
    {
        app.UseExceptionHandler("/Home/Error");
        app.UseHsts();
    }

    app.UseHttpsRedirection();
    app.UseStaticFiles();

    app.UseRouting();

    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllerRoute(
            name: "default",
            pattern: "{controller=Home}/{action=Index}/{id?}");
    });
}
}