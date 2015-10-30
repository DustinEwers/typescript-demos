using System.Web.Mvc;

namespace tsDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Slides()
        {
            return View();
        }

        public ActionResult Game()
        {
            return View();
        }
    }
}