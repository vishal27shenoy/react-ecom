import React, { useContext } from "react";
import Navbar from "../component/Navbar";
import "../css/home.css";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import Coursel from "../component/Coursel";
import Footer from "../component/Footer";
import { DataContext } from "../index";
const Home = () => {
  const { age } = useContext(DataContext);
  console.log(age);
  return (
    <div>
      {" "}
      {/* <Navbar /> */}
      <div className="home_main_container">
        <Coursel />
        <div className="home_body_conatiner">
          <div className="home_body_img_and_infocontainer">
            <div className="home_body_left_container">
              <img
                src="https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="body1_img"
              />
            </div>
            <div className="home_body_right_container">
              <span className="welcome_title">WELCOME</span>
              <span className="to_title">to</span>
              <span className="az_title">A-Z CART</span>
            </div>
          </div>
          <div className="home_body_product_container">
            <div>
              <img
                src="https://media.glamour.com/photos/62a0cbccfa08edc699cf660e/master/w_320%2Cc_limit/GettyImages-1388351394.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.ajio.com/medias/sys_master/root/20210128/KK9X/6011b97baeb269698157f084/-288Wx360H-460812866-black-MODEL.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/i/o/v/-original-imagg5r53p6byz6t.jpeg?q=70"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJpmD09TwnXgjoiWiToyk8nS--7PigS_7kgLJWwe59Nw&usqp=CAU&ec=48665701"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnsN81Bd4pxpYgyRLj-8Wc560JkUSG78nbv-2H328jQ&usqp=CAU&ec=48665701?q=tbn:ANd9GcT3vPqM-v9nQ3S1GhZ_vq5k3wCMu4Q4wMlUvbyCiBf2dQ&usqp=CAU&ec=48665701"
                alt=""
              />
            </div>
          </div>
          <div className="home_brand_collabration_container">
            <span className="brand_collabration">Brand Collabration</span>
            <div className="brand_logo_container">
              <div>
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATAAAACmCAMAAABqbSMrAAAAllBMVEX39/cUKKD///sPJZ8AHp77+/kAFZwAAJohNaf8/PkAE5wAGJxfabdpc7yZn84MI5+nrNSeo8+Ql8sAHJ3l5u8AC5vt7vTf4OvO0OPz8/YABZrV2OlTX7UtPqmjqNI6R6pDTqzCxuF5gcEZLaNATKtLV7BjbbmCicW2uto0Q6onOafZ2+qHjsdXYrWus9d0fcC7v93IyuLNkk80AAAKM0lEQVR4nO2a23bqug6GEycmOCm4HBIaKC2UQg8cCu//ctu2JDuhs2vRMWbGutj6LjpKApb9x5YlOVHEMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDIFIJh5KdWpFgRXZjhQbRUfMNQ6J+P9xtV6vt7nCuxZU50UK2ftdA/eliqyklFqe33fG4e7tfKPWHdmTrkwq/C0R//go1fxjY5k+L9p2/jVgMsrJItSEtyuxl2hqm6DdJHsJNOdPhxmYAN9RTEi7q9/BtVQ91lhepocizZFz7W3I0t1fT+cheUvfwqRzjoMVg4xtMa/eDKVzZfInQmXoUh+bTcdWdZOqpnMQNingtGrerLHFo97d8Dx2R+3m4lX7g8F6KxFOewjR5WOZJMJLkHwu6p0a5+3Y+slfkPXzqecHuJr7B+dpqKqep600x8B1Vi4+y1Xz/0tW6VE/zJG6h80VjGl1K6EIf1HxrPNQF3Io39k9ew8Vjaq+4S3F+L8N3ddtKmtJMVqOeu9IjwcBSECz1P5q8CCdY4rqcesHkrHfVvJ4/dOQoZxnqlRYF/ffYEAz739+5HqXH74Lpo72Vgcr1p2kkeX5OQALf0CcOSBcTtDK5E78WTC+d4Wl8LdgzfSehp683nehllxAYKHfDQ4yjKmd+oOLLdUWvRgX0uAqCPYBgk7Fd0rlbfrKy1/Ru61rqDXHQ6gQqxPnj+C1FKz2cYjcKBo/APhbjw9qCyTM2n2b9OMPm81MnU0yBbdO8UKJaavzgfY9YwczaXaBPedCSBMtPqRcHVnAxhF+FQe9SVMHsbWSlXP9GsORZkxVZ9duCiQE0PzlOlfFm0Hx67MLvyz1MsGRpOy9wIviZEUVT6NvkZVa2RhkF9zbf26ef7oQfbm/92hYMNUo2lfm1QEnyp98Ilg4+Erv87W+uBaufofm+bV494JA+w2L4i4I9QPf01m0/a5Cg8ILJfU6DKa+1lDjp5jO7APWn7b042N6mMxTsACOSlU7gsdQNoamp2wSbHJxzyK0m1WdLMDmF5tHB1jDFEj3tYE3SoOPUdkSe58DYb/k458qLwqk2CIKt4V42cyr1rBjCapf0JTzyyRuNKIWFP9lbKxe08jvBXpyjct6iWl4JBg3gZwn+IJ50ItgCbBkhbEJRPQDeUcGMMd1fiCN4/2VYkl4wp6oLRoR91uZJo2AvuGZwDZn9t25Y+ZXTT7+qwvVT+BUeBMtbgi0zoAvBokjjPlxsZyY3kYgXBbx1ElckXVb7e2cSbJFZwc5Wi9KtNQlLckKhuHzEbX/ysf9m5VYf5mZOUii/6H4QLKqRLuQyYQOGFWZLHlfi+nYN3kIvBQ0kBIRBsNqO2Do+2DjLdxTMe2X1hCvfBJQv0ysrtwoG3ytNCI9O/ifBOsUY84F+3h9G7Vksqwy6chS0IYSQIwgWWX1sd+W7vWTWwqotWFQvfSRexOO6nTXfJthO7DN3XfyzYFJeL5O/izqHJMykYO8tO37bPCg5Be28X0J1rGDiawIbrVu3SRJFFL357+4Lr1jSS09NKzcKdiekXYl6ZX76+rNg00A3gkXinIc8TGfbRWNe01jstKog1tYruk876Hwmhj0XBcHg9KOkGXbn25IPm5DhJOXqIr4Z+VfBwI1OzI60+lGwup8R81lHc0wslo1MPy1GYSxiAIUMF66uMDokZ+q92ky5yMomAXatmASdBGtknmq6zYIVXY5DpeE2wYxXADP3Sm5/FuzZP/2sK8HMqh/qwo8lyb5CJok5c2aiNJ9/7GVbMJN5zlKnqnJJnkniaEQNwSIpTv2etxLPd78WDALWdCfVfyyY6dTsKwsrpjyQU64xy0ijEJL55IgGagRzPr03FHu3SS5IMP3Y2rZU9ZY3rJAzvE0wbQRzzyyZ1OIfBFuW5GG6FCySarENFasMq28+cbKOVl2PRA0LEsxFtWY7sNtAspl6wbbtfV6K2W7urcx/lXxb8WGbKdfi8Wenf7o/YaTfqWB2MOdPH5LhQMmtT75UKE6E4GrsBVN29hl57BWrriLBrrssxeWV1iWV3W4UzPbJxcWTN3n8WTApFZZGuhFMhuMFWQ1KmmLg2MVbETov99AP/Vy3BTPO3j36RLvwwnYb14ybmS0rRsvoZQ5GKDu+VTCJqar+hLLuT4Gr6FIwed4+Ora1HRZVEzGcx/wRg1VKCHsVdIScmhXMJUfZ1MZHtsxKgr2ilX28BOwYxBjnWLb/rWDSZQy92d1/Jpg6ZdodF5Vu2iiItcixU6lv7srP4lU31TTzD2IOWzlVLptc2y/Y3AWdDE1Go6cGMzCG51ZDNwq2sjdndnbm94P/UDBM8lxxJhIvjbjLHi001w51hAp/9GUrmLBB+ORgL5TTINiHFwysaDcG+iEJNrxJMJitkIRdCwbtYWJB/Sy7WZLotkroHMZaMBRKjHDc5LOoyuU8lh2aVcjNtr5T19z1glU4IhRsAoKRFRiR335duVHg3pvTAQoJ5mar21aSz6tUFZ2FfnUaY+bfcQGxvLgdBo90oJRECmmIP2k26mfRUtcW6qQvR7hgVcA2RlViKomaySlCSZ5GJB9gF9DLWkmFeaJb2d8Fg0An2TSXoLkKLjMuhnZjwQnrN6e/S4US6c8HJWvMhJINKIRTCMtaVFqOsz8IhoPGpYS7hS+r04iSdFTLxSM0S0GHlzNdnRfrLZ4qF7MrwWCaY72pLZiibaRYjcdb3LiaR6h/EX/qp+fxJx2BFxjqo88H52IPwVEwOIIkX+FOZCuK4XL7egAJ1seKgXqigKVnkmK0mNPxAK3tWOdzip5DVkWCwQEfHvtdzbAKS+CxLnxVpBMXZnd8n3j7M9CkgLVSo0CUDAlavmfZ1NoJ5nM4tzeRYBvvRl7DOBEd+yx+f334bprxdUo6ZgPBvNNtChaJU/atgWFH1URxf93bJIMXKPwyo1cHsFJPGxhFac4V0fpMNnW4lcQkmJzFk7aVtPFCghlv+6Q/mT/54ZJguLzrIE2jwiqGZeuJ6JAP/33F3ntF01ah3zExus96Dirjiy+4UEJOLbal/ZTnVhU1pntuH3zEW35ZyOljI703A3puvMARiXO/WZTL4/dGiekRylvFtPXRFrzuGt+6bLMCD/N0ka3WHc0vJ8z0pZz30tTElWlvnr1N8dnI9RC5vvCE4QB+tI9eLsbwwS1XeWrcwh/L8zGb572iKPIyez21i+GyHj1nZW4ps49h62WlqwJqFUqqzZNaKR/G29Qpuxo/RJ34L29LqPVocNxuj4PRRYa34KQCvl2gckXztvzjp7aZ6HIaHg7j07r6/sabFNXl/XR/er98u3l9kvVD0d69gFjXquv3KIOxzl/ZdDoaGz8Y6fTsgmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEY5v+T/wEpBskbjmv4vQAAAABJRU5ErkJggg==" />
              </div>
              <div>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="home_our_services">
            <span className="our_service">Our Services</span>
            <div className="our_services_containerr">
              <div>
                <TbTruckDelivery className="delivery" />
                <span className="fatedelivery">Fast onsite delivery</span>
              </div>
              <div>
                <RiCustomerService2Fill className="delivery" />
                <span className="fatedelivery">24/7 Customer care</span>
              </div>
              <div>
                <MdOutlineLocalOffer className="delivery" />
                <span className="fatedelivery">Best Brand deal and offer</span>
              </div>
              <div>
                {" "}
                <GiTakeMyMoney className="delivery" />
                <span className="fatedelivery">Cash on delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;