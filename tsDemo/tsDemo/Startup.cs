using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(tsDemo.Startup))]
namespace tsDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {

        }
    }
}
