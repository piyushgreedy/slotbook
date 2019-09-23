using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Slotly.Models;

namespace Slotly.Controllers
{
    public class HomeController : Controller
    {
        
        public IActionResult Index()
        {
            Console.WriteLine("Index");
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";
            return View();
        }

        [HttpGet]
        public IActionResult ReceiveWithRequestFormData(string username, string password)
        {
            System.Diagnostics.Debug.WriteLine("Request Form Data");
            System.Diagnostics.Debug.WriteLine("username");
            //return Content("Login successful !"+ username);
            LoginContext loginContext = HttpContext.RequestServices.GetService(typeof(LoginContext)) as LoginContext;
            Boolean isAuthorised = loginContext.verifyLoginValues(username,password);
            if(isAuthorised)
                return RedirectToAction("Index","Home");
            else
                return Content("UnAuthorised");
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View();
        }
    }
}
