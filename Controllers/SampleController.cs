using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace worksample_dotnetcore_swagger_axios.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SampleController : ControllerBase
    {
        /// <summary>
        /// ほげほげ
        /// </summary>
        /// <param name="model">ふがふが</param>
        /// <returns>ほげほげふがふが</returns>
        [HttpPost("{id}")]
        public ResponseModel Post([Required][FromBody] RequestModel model)
        {
            return new ResponseModel
            {
                Value = "test"
            };
        }
    }

    public class RequestModel
    {
        [Required]
        public string Param { get; set; }
    }

    public class ResponseModel
    {
        [Required]
        public string Value { get; set; }
    }
}