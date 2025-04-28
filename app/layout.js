import "../app/bootstrap.rtl.css";
import Image from "next/image";
import "../app/globals.css";
import "../app/page.css";

export default function Layout() {
  return (
    <html>
      <head>
        <title>Crafto - Business</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="https://craftohtml.themezaa.com/images/apple-touch-icon-114x114.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
      </head>
      <body>
        {/* Header */}

        <section className="container header">
          <button className="btn m-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
            <Image src="/menu.svg" width="25" height="25" layout="responsive" className="header-menu" alt="menu"></Image>
          </button>

          <div className="offcanvas offcanvas-start" id="offcanvasMenu">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">منو</h5>
            </div>

            <div className="offcanvas-body">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">خانه</a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">درباره</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#productMenu">خدمات</a>
                  <div className="collapse" id="productMenu">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <Image src="/work.svg" width="25" height="25" layout="responsive" className="craft-img" alt="menu"></Image>
                          تجزیه‌ و تحلیل داده‌ ها
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <Image src="/description.svg" width="25" height="25" layout="responsive" className="craft-img" alt="menu"></Image>
                          مشاوره مالی
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <Image src="/devices.svg" width="25" height="25" layout="responsive" className="craft-img" alt="menu"></Image>
                          ابداعات تکنولوژی
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <Image src="/chart.svg" width="25" height="25" layout="responsive" className="craft-img" alt="menu"></Image>
                          کسب‌ و کار دیجیتال
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <Image src="/brain.svg" width="25" height="25" layout="responsive" className="craft-img" alt="menu"></Image>
                          هوش مصنوعی
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <Image src="/net.svg" width="25" height="25" layout="responsive" className="craft-img" alt="menu"></Image>
                          محاسبات ابری
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">پرونده‌ های تحلیلی</a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">وبلاگ</a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">ارتباط با ما</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-center text-center align-items-center m-3">
            <a href="#" className="header-a">راه‌اندازی پروژه</a>
          </div>
        </section>

        {/* Craft */}

        <section className="container craft">
          <div className="container craft-inner">
            <div className="row align-items-center h-100">
              <div className="col-xl-6 col-lg-8 col-md-10 position-relative z-index-1">
                <span className="craft-span">کسب ‌و کار خود را در کنار ما پیشرفت دهید</span>

                <h1 className="craft-h1">ما کسب‌ و کار هایی منحصر به فرد را با ایده‌ های خلاقانه شکل می‌دهیم</h1>

                <div>
                  <p className="craft-p">ما در زمینه خدمات شرکتی فعالیت داریم و با برند های بین‌ المللی در سراسر جهان همکاری می‌کنیم</p>
                </div>

                <div className="d-flex">
                  <a href="#" className="craft-a-1">کشف کنید</a>

                  <a href="#" className="craft-a-2">ارتباط با ما</a>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Creative */}

        <section className="container creative">
          <div className="container creative-inner">
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 creative-100">
              <div className="col d-flex">
                <div className="creative-margin">
                  <Image src="/2.gif" width="80" height="80" layout="responsive" className="creative-gif" alt="creative-gif"></Image>
                </div>

                <div className="creative-box">
                  <span className="creative-span">کسب‌ و کار خود را گسترش دهید</span>

                  <p className="creative-p">ما به چالش‌ ها اعتقاد داریم بنابراین چالش‌ هایی ایجاد کرده‌ایم</p>
                </div>
              </div>

              <div className="col d-flex">
                <div className="creative-margin">
                  <Image src="/3.gif" width="80" height="80" layout="responsive" className="creative-gif" alt="creative-gif"></Image>
                </div>

                <div className="creative-box">
                  <span className="creative-span">ایده‌ های صرفه‌ جویی در هزینه</span>

                  <p className="creative-p">ما همچنین به مشتریان خود در استراتژی شبکه‌ های اجتماعی کمک می‌کنیم</p>
                </div>
              </div>

              <div className="col d-flex">
                <div className="creative-margin">
                  <Image src="/1.gif" width="80" height="80" layout="responsive" className="creative-gif" alt="creative-gif"></Image>
                </div>

                <div className="creative-box">
                  <span className="creative-span">بهینه‌ سازی عملکرد</span>

                  <p className="creative-p">ما کمپین‌ های ایمیل مارکتینگ را به دست مخاطبان شما می‌ رسانیم</p>
                </div>
              </div>
            </div>

            <div className="row mb-10 creative-420">
              <div className="col-xl-5 col-lg-6 offset-lg-1 h-100 creative-box">
                <span className="creative-span-2">رویکرد خلاقانه</span>

                <h3 className="creative-h3">شرکت توانمند برای کسب‌ و کار های بزرگ</h3>

                <p className="creative-p-2">ما تلاش می‌ کنیم راه‌حل‌ های وب واقعی را توسعه دهیم که برای پروژه‌ های کوچک تا بزرگ تا با نیاز های سفارشی ایده‌ال باشند. ما طراحی‌ های وب جذابی ایجاد می‌کنیم که متناسب با گروه‌ های هدف شما هستند و همچنین بهینه شده‌اند</p>

                <div>
                  <div className="creative-bar">
                    <div className="creative-color-red">
                      <span className="creative-number-red">۹۸٪</span>
                    </div>

                    <div className="creative-text">افزایش فعالیت‌ های تجاری</div>
                  </div>

                  <div className="creative-bar">
                    <div className="creative-color-blue">
                      <span className="creative-number-blue">۸۵٪</span>
                    </div>

                    <div className="creative-text">پیشرفت‌ در فناوری</div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 position-relative h-100 creative-doc">
                <div className="creative-img-1">
                  <Image src="/4.jpg" width="25" height="25" layout="responsive" className="creative-person" alt="creative-person"></Image>
                </div>

                <div className="creative-img-2">
                  <Image src="/3.jpg" width="25" height="25" layout="responsive" className="creative-person" alt="creative-person"></Image>
                </div>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 ps-3 pe-3 creative-50">
              <div className="col">
                <a href="#">
                  <Image src="/amazon.svg" width="25" height="25" layout="responsive" className="creative-img" alt="creative-brand"></Image>
                </a>
              </div>

              <div className="col">
                <a href="#">
                  <Image src="/yahoo.svg" width="25" height="25" layout="responsive" className="creative-img" alt="creative-brand"></Image>
                </a>
              </div>

              <div className="col">
                <a href="#">
                  <Image src="/invision.svg" width="25" height="25" layout="responsive" className="creative-img" alt="creative-brand"></Image>
                </a>
              </div>

              <div className="col">
                <a href="#">
                  <Image src="/netflix.svg" width="25" height="25" layout="responsive" className="creative-img" alt="creative-brand"></Image>
                </a>
              </div>

              <div className="col">
                <a href="#">
                  <Image src="/walmart.svg" width="25" height="25" layout="responsive" className="creative-img" alt="creative-brand"></Image>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Understand */}

        <section className="container understand">
          <div className="container understand-inner">
            <div className="row align-items-center mb-5 text-center text-lg-start">
              <div className="col-lg-6">
                <h3 className="understand-h3">درک خدمات کسب‌ و کار</h3>
              </div>

              <div className="col-lg-6">
                <p className="understand-p">ما در پی توسعه راهکار های وب کاربردی هستیم که مناسب پروژه‌ های کوچک تا بزرگ باشند و با نیازهای اختصاصی شما هماهنگ شوند</p>
              </div>
            </div>

            <div className="row understand-div">
              <div className="understand-div-container">
                <div className="understand-div-item">
                  <div className="position-relative">
                    <a href="#">
                      <Image src="/5.jpg" width="80" height="80" layout="responsive" className="understand-img" alt="understand-pic"></Image>
                    </a>
                  </div>

                  <div className="">
                    <div className="understand-top">
                      <a href="#" className="understand-a">تجارت دیجیتال</a>

                      <p className="understand-p-2">لورم ایپسوم صرفاً یک متن ساختگی است</p>
                    </div>

                    <div className="understand-bottom">
                      <a href="#" className="understand-a-2">بررسی سرویس‌</a>
                    </div>
                  </div>
                </div>

                <div className="understand-div-item">
                  <div className="position-relative">
                    <a href="#">
                      <Image src="/6.jpg" width="80" height="80" layout="responsive" className="understand-img" alt="understand-pic"></Image>
                    </a>
                  </div>

                  <div className="">
                    <div className="understand-top">
                      <a href="#" className="understand-a">محاسبات ابری</a>

                      <p className="understand-p-2">لورم ایپسوم صرفاً یک متن ساختگی است</p>
                    </div>

                    <div className="understand-bottom">
                      <a href="#" className="understand-a-2">بررسی سرویس‌</a>
                    </div>
                  </div>
                </div>

                <div className="understand-div-item">
                  <div className="position-relative">
                    <a href="#">
                      <Image src="/7.jpg" width="80" height="80" layout="responsive" className="understand-img" alt="understand-pic"></Image>
                    </a>
                  </div>

                  <div className="">
                    <div className="understand-top">
                      <a href="#" className="understand-a">تجزیه و تحلیل داده</a>

                      <p className="understand-p-2">لورم ایپسوم صرفاً یک متن ساختگی است</p>
                    </div>

                    <div className="understand-bottom">
                      <a href="#" className="understand-a-2">بررسی سرویس‌</a>
                    </div>
                  </div>
                </div>

                <div className="understand-div-item">
                  <div className="position-relative">
                    <a href="#">
                      <Image src="/8.jpg" width="80" height="80" layout="responsive" className="understand-img" alt="understand-pic"></Image>
                    </a>
                  </div>

                  <div className="">
                    <div className="understand-top">
                      <a href="#" className="understand-a">مشاوره اقتصادی</a>

                      <p className="understand-p-2">لورم ایپسوم صرفاً یک متن ساختگی است</p>
                    </div>

                    <div className="understand-bottom">
                      <a href="#" className="understand-a-2">بررسی سرویس‌</a>
                    </div>
                  </div>
                </div>

                <div className="understand-div-item">
                  <div className="position-relative">
                    <a href="#">
                      <Image src="/9.jpg" width="80" height="80" layout="responsive" className="understand-img" alt="understand-pic"></Image>
                    </a>
                  </div>

                  <div className="">
                    <div className="understand-top">
                      <a href="#" className="understand-a">ابداع تکنولوژی</a>

                      <p className="understand-p-2">لورم ایپسوم صرفاً یک متن ساختگی است</p>
                    </div>

                    <div className="understand-bottom">
                      <a href="#" className="understand-a-2">بررسی سرویس‌</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serving */}

        <section className="container serving">
          <div className="container serving-inner">
            <div className="row justify-content-center mb-5">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <h3 className="serving-h3">عرضه خدمات به مشتریان در بخش‌ های متنوع</h3>
              </div>
            </div>

            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-0 serving-box">
              <div className="col serving-col">
                <div className="d-flex justify-content-center mb-3">
                  <svg className="serving-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="#fff" d="M192 0C139 0 96 43 96 96l0 160c0 53 43 96 96 96s96-43 96-96l0-160c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40z" />
                  </svg>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="serving-span">ضبط کردن پادکست</span>
                </div>
              </div>

              <div className="col serving-col">
                <div className="d-flex justify-content-center mb-3">
                  <svg className="serving-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="#fff" d="M512 80c8.8 0 16 7.2 16 16l0 32L48 128l0-32c0-8.8 7.2-16 16-16l448 0zm16 144l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192 480 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z" />
                  </svg>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="serving-span">سرمایه‌ گذاری</span>
                </div>
              </div>

              <div className="col serving-col">
                <div className="d-flex justify-content-center mb-3">
                  <svg className="serving-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#fff" d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z" />
                  </svg>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="serving-span">مطالعات علمی</span>
                </div>
              </div>

              <div className="col serving-col">
                <div className="d-flex justify-content-center mb-3">
                  <svg className="serving-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#fff" d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" />
                  </svg>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="serving-span">مشاور اجرایی</span>
                </div>
              </div>

              <div className="col serving-col">
                <div className="d-flex justify-content-center mb-3">
                  <svg className="serving-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="#fff" d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
                  </svg>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="serving-span">غذا</span>
                </div>
              </div>

              <div className="col serving-col">
                <div className="d-flex justify-content-center mb-3">
                  <svg className="serving-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#fff" d="M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9l2.3 0c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z" />
                  </svg>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="serving-span">مسافرت</span>
                </div>
              </div>

              <div className="col serving-col">
                <div className="d-flex justify-content-center mb-3">
                  <svg className="serving-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path fill="#fff" d="M96 224l0 32 0 160c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-88.2c9.9 6.6 20.6 12 32 16.1l0 24.2c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16.9c5.3 .6 10.6 .9 16 .9s10.7-.3 16-.9l0 16.9c0 8.8 7.2 16 16 16s16-7.2 16-16l0-24.2c11.4-4 22.1-9.4 32-16.1l0 88.2c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-160 32 32 0 49.5c0 9.5 2.8 18.7 8.1 26.6L530 427c8.8 13.1 23.5 21 39.3 21c22.5 0 41.9-15.9 46.3-38l20.3-101.6c2.6-13-.3-26.5-8-37.3l-3.9-5.5 0-81.6c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 14.4-52.9-74.1C496 86.5 452.4 64 405.9 64L272 64l-16 0-64 0-48 0C77.7 64 24 117.7 24 184l0 54C9.4 249.8 0 267.8 0 288l0 17.6c0 8 6.4 14.4 14.4 14.4C46.2 320 72 294.2 72 262.4l0-6.4 0-32 0-40c0-24.3 12.1-45.8 30.5-58.9C98.3 135.9 96 147.7 96 160l0 64zM560 336a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM166.6 166.6c-4.2-4.2-6.6-10-6.6-16c0-12.5 10.1-22.6 22.6-22.6l178.7 0c12.5 0 22.6 10.1 22.6 22.6c0 6-2.4 11.8-6.6 16l-23.4 23.4C332.2 211.8 302.7 224 272 224s-60.2-12.2-81.9-33.9l-23.4-23.4z" />
                  </svg>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="serving-span">لبنیات</span>
                </div>
              </div>

              <div className="col serving-col">
                <div className="d-flex justify-content-center mb-3">
                  <svg className="serving-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#fff" d="M116.7 33.8c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152zm38.5 39.8c-3.3 2.5-4.2 7-2.1 10.5l57.4 95.6L63.3 192c-4.1 .3-7.3 3.8-7.3 8s3.2 7.6 7.3 8l192 16c.4 0 .9 0 1.3 0l192-16c4.1-.3 7.3-3.8 7.3-8s-3.2-7.6-7.3-8L301.5 179.8l57.4-95.6c2.1-3.5 1.2-8.1-2.1-10.5s-7.9-2-10.7 1L256 172.2 165.9 74.6c-2.8-3-7.4-3.4-10.7-1z" />
                  </svg>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="serving-span">جواهرات</span>
                </div>
              </div>

              <div className="col serving-col">
                <div className="d-flex justify-content-center mb-3">
                  <svg className="serving-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="#fff" d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
                  </svg>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="serving-span">سوخت</span>
                </div>
              </div>

              <div className="col serving-col">
                <div className="d-flex justify-content-center mb-3">
                  <svg className="serving-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#fff" d="M505 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L383 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l88-88zM305.5 27.3c-6.2-6.2-16.4-6.2-22.6 0L271.5 38.6c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8L101.8 231c-6.2-6.2-16.4-6.2-22.6 0L67.9 242.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4L9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l68.9-68.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0L486.5 231c6.2-6.2 6.2-16.4 0-22.6L475.2 197c-5.2-5.2-10.6-9.8-16.4-13.9L505 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-59.4 59.4c-20.6-4.4-42-3.7-62.3 2.1c6.1-21.3 6.6-43.8 1.4-65.3L409 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L329.1 52.9c-3.7-5-7.8-9.8-12.4-14.3L305.5 27.3z" />
                  </svg>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="serving-span">کشاورزی</span>
                </div>
              </div>

              <div className="col serving-col">
                <div className="d-flex justify-content-center mb-3">
                  <svg className="serving-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#fff" d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                  </svg>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="serving-span">بخش‌ های صنعتی</span>
                </div>
              </div>

              <div className="col serving-col">
                <div className="d-flex justify-content-center mb-3">
                  <svg className="serving-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="#fff" d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z" />
                  </svg>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="serving-span">جشنواره</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Save */}

        <section className="container save">
          <div className="container save-inner">
            <div className="row save-row">
              <div className="col-auto d-flex align-items-center">
                <Image src="/1.jpg" width="130" height="100" layout="responsive" className="save-img" alt="save"></Image>

                <div className="save-text">
                  <p className="mb-0">زمان و تلاش ارزشمند خود را برای یافتن راه‌حل هدر ندهید همین حالا با ما تماس بگیرید</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case */}

        <section className="container case">
          <div className="container case-inner">
            <div className="row align-items-center mb-5">
              <div className="col-xl-12 d-flex text-center justify-content-center">
                <h3 className="case-h3">مطالعات تحقیقاتی اخیر</h3>
              </div>
            </div>

            <div className="row case-945">
              <div className="col-12">
                <ul className="d-flex flex-wrap h-100 p-0 m-0">
                  <li className="case-li">
                    <a href="#" className="d-block h-100">
                      <div className="h-100">
                        <Image src="/green.jpg" width="130" height="100" layout="responsive" className="case-img" alt="case"></Image>

                        <div className="d-flex justify-content-center">
                          <div className="case-box">
                            <div className="case-text">
                              <div className="case-light">برند سازی</div>

                              <div className="case-dark">طراحی و دوخت</div>
                            </div>

                            <div className="case-icon">
                              <Image src="/add.svg" width="130" height="100" layout="responsive" className="case-add" alt="case"></Image>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="case-li">
                    <a href="#" className="d-block h-100">
                      <div className="h-100">
                        <Image src="/cream.jpg" width="130" height="100" layout="responsive" className="case-img" alt="case"></Image>

                        <div className="d-flex justify-content-center">
                          <div className="case-box">
                            <div className="case-text">
                              <div className="case-light">طراحی</div>

                              <div className="case-dark">اسپانیو</div>
                            </div>

                            <div className="case-icon">
                              <Image src="/add.svg" width="130" height="100" layout="responsive" className="case-add" alt="case"></Image>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="case-li">
                    <a href="#" className="d-block h-100">
                      <div className="h-100">
                        <Image src="/woman.jpg" width="130" height="100" layout="responsive" className="case-img" alt="case"></Image>

                        <div className="d-flex justify-content-center">
                          <div className="case-box">
                            <div className="case-text">
                              <div className="case-light">برند سازی</div>

                              <div className="case-dark">گیاهی</div>
                            </div>

                            <div className="case-icon">
                              <Image src="/add.svg" width="130" height="100" layout="responsive" className="case-add" alt="case"></Image>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="case-li">
                    <a href="#" className="d-block h-100">
                      <div className="h-100">
                        <Image src="/plant.jpg" width="130" height="100" layout="responsive" className="case-img" alt="case"></Image>

                        <div className="d-flex justify-content-center">
                          <div className="case-box">
                            <div className="case-text">
                              <div className="case-light">بروشور</div>

                              <div className="case-dark">محصولات کشاورزی</div>
                            </div>

                            <div className="case-icon">
                              <Image src="/add.svg" width="130" height="100" layout="responsive" className="case-add" alt="case"></Image>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="case-li">
                    <a href="#" className="d-block h-100">
                      <div className="h-100">
                        <Image src="/blue.jpg" width="130" height="100" layout="responsive" className="case-img" alt="case"></Image>

                        <div className="d-flex justify-content-center">
                          <div className="case-box">
                            <div className="case-text">
                              <div className="case-light">مدل‌ سازی</div>

                              <div className="case-dark">نقض‌ کننده</div>
                            </div>

                            <div className="case-icon">
                              <Image src="/add.svg" width="130" height="100" layout="responsive" className="case-add" alt="case"></Image>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="case-li">
                    <a href="#" className="d-block h-100">
                      <div className="h-100">
                        <Image src="/white.jpg" width="130" height="100" layout="responsive" className="case-img" alt="case"></Image>

                        <div className="d-flex justify-content-center">
                          <div className="case-box">
                            <div className="case-text">
                              <div className="case-light">دیجیتال</div>

                              <div className="case-dark">پیکس‌ فلو</div>
                            </div>

                            <div className="case-icon">
                              <Image src="/add.svg" width="130" height="100" layout="responsive" className="case-add" alt="case"></Image>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trust */} {/* complete img & text */}

        <section className="container trust">
          <div className="container trust-inner">
            <div className="row trust-header">
              <h3 className="trust-h3">مورد اعتماد سریع‌ ترین شرکت‌ های در حال رشد جهان</h3>
            </div>

            <div className="row trust-text">
              <div className="col-xl-10 trust-doc">
                <div className="row trust-text-item">
                  <div className="col-lg-5 col-md-7 text-md-start trust-detail">
                    <a href="#" className="d-block text-end mb-3">
                      <Image src="/logitech.svg" width="190" height="40" layout="responsive" className="trust-brand" alt="trust-brand"></Image>
                    </a>

                    <span className="trust-span">تیم انها کار کردن با ان ها اسان است و به من کمک کردند تا وب‌ سایت‌های شگفت‌ انگیزی را در مدت زمان کوتاهی بسازم. از شما بچه‌ ها برای همه زحمت‌ هایتان تشکر می‌کنم. به ما اعتماد کنید، ما مدت زیادی جستجو کردیم</span>

                    <span className="trust-name">سارا محمدی</span>
                  </div>

                  <div className="col-8 col-md-4 col-sm-6 trust-pic">
                    <Image src="/1.webp" width="190" height="40" layout="responsive" className="trust-person" alt="trust-person"></Image>
                  </div>
                </div>

                <div className="row trust-text-item">
                  <div className="col-lg-5 col-md-7 text-md-start trust-detail">
                    <a href="#" className="d-block text-end mb-3">
                      <Image src="/invision.svg" width="190" height="40" layout="responsive" className="trust-brand" alt="trust-brand"></Image>
                    </a>

                    <span className="trust-span">تیم انها کار کردن با ان ها اسان است و به من کمک کردند تا وب‌ سایت‌های شگفت‌ انگیزی را در مدت زمان کوتاهی بسازم. از شما بچه‌ ها برای همه زحمت‌ هایتان تشکر می‌کنم. به ما اعتماد کنید، ما مدت زیادی جستجو کردیم</span>

                    <span className="trust-name">علی اکبری</span>
                  </div>

                  <div className="col-8 col-md-4 col-sm-6 trust-pic">
                    <Image src="/2.webp" width="190" height="40" layout="responsive" className="trust-person" alt="trust-person"></Image>
                  </div>
                </div>

                <div className="row trust-text-item">
                  <div className="col-lg-5 col-md-7 text-md-start trust-detail">
                    <a href="#" className="d-block text-end mb-3">
                      <Image src="/moon.svg" width="190" height="40" layout="responsive" className="trust-brand" alt="trust-brand"></Image>
                    </a>

                    <span className="trust-span">تیم انها کار کردن با ان ها اسان است و به من کمک کردند تا وب‌ سایت‌های شگفت‌ انگیزی را در مدت زمان کوتاهی بسازم. از شما بچه‌ ها برای همه زحمت‌ هایتان تشکر می‌کنم. به ما اعتماد کنید، ما مدت زیادی جستجو کردیم</span>

                    <span className="trust-name">سینا احمدی</span>
                  </div>

                  <div className="col-8 col-md-4 col-sm-6 trust-pic">
                    <Image src="/3.webp" width="190" height="40" layout="responsive" className="trust-person" alt="trust-person"></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 trust-box">
              <div className="col trust-icon">
                <div className="trust-up">
                  <Image src="/monday.svg" width="190" height="40" layout="responsive" className="trust-img" alt="trust-logo"></Image>
                </div>

                <div className="trust-down">
                  <p className="trust-p">مدیریت پروژه رشد ۲۷۵ درصد</p>
                </div>
              </div>

              <div className="col trust-icon">
                <div className="trust-up">
                  <Image src="/dropbox.svg" width="190" height="40" layout="responsive" className="trust-img" alt="trust-logo"></Image>
                </div>

                <div className="trust-down">
                  <p className="trust-p">مدیریت تیم رشد ۱۹۵ درصد</p>
                </div>
              </div>

              <div className="col trust-icon">
                <div className="trust-up">
                  <Image src="/slack.svg" width="190" height="40" layout="responsive" className="trust-img" alt="trust-logo"></Image>
                </div>

                <div className="trust-down">
                  <p className="trust-p">ذخیره‌ سازی امن رشد ۲۳۵ درصد</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project */}

        <section className="container project">
          <div className="container project-inner">
            <div className="row align-items-center justify-content-center h-100">
              <div className="col-xl-8 col-lg-10 d-flex flex-column justify-content-center align-items-center">
                <span className="craft-span">بیایید با همکاری یکدیگر کاری بزرگ را رقم بزنیم</span>

                <h1 className="project-h1">ما ایده‌ های خلاقانه برای حل مشکلات کسب‌ و کار ارائه می‌دهیم</h1>

                <a href="#" className="craft-a-1">پروژه‌ ای در ذهن دارید؟</a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}

        <section className="container footer">
          <div className="container footer-inner">
            <div className="row footer-up">
              <div className="col-6 col-xl-3 col-lg-12 col-sm-6 text-xl-start text-lg-center order-sm-1">
                <p className="d-flex footer-gray">رهبری شرکت شما با استراتژی‌ های خلاقانه</p>

                <div>
                  <ul className="d-flex justify-content-center p-0 m-0">
                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg drible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-6 col-xl-2 col-lg-3 col-sm-4 order-sm-3 order-lg-2">
                <span className="footer-span">شرکت</span>

                <ul className="p-0 mt-2">
                  <li className="mb-1">
                    <a href="#" className="footer-a-3">ما کی هستیم؟</a>
                  </li>

                  <li className="mb-1">
                    <a href="#" className="footer-a-3">خدمات ما</a>
                  </li>

                  <li className="mb-1">
                    <a href="#" className="footer-a-3">مشتریان ما</a>
                  </li>

                  <li className="mb-1">
                    <a href="#" className="footer-a-3">ارتباط با ما</a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-xl-2 col-lg-3 col-md-5 col-sm-4  order-sm-4 order-lg-3">
                <span className="footer-span">خدمات</span>

                <ul className="p-0 mt-2">
                  <li className="mb-1">
                    <a href="#" className="footer-a-3">برنامه‌ ریزی</a>
                  </li>

                  <li className="mb-1">
                    <a href="#" className="footer-a-3">پژوهش</a>
                  </li>

                  <li className="mb-1">
                    <a href="#" className="footer-a-3">مشاوره</a>
                  </li>

                  <li className="mb-1">
                    <a href="#" className="footer-a-3">تحلیل و بررسی</a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-xl-2 col-lg-3 col-md-3 col-sm-4 order-sm-5 order-lg-4">
                <span className="footer-help">نیاز به کمک دارید؟</span>

                <span className="footer-need">با ما تماس مستقیم بگیرید</span>

                <span>
                  <a href="#" className="footer-help">۰۹۱۹۱۵۰۱۲۹۳</a>
                </span>

                <span className="footer-need">نیاز به پشتیبانی دارید؟</span>

                <a href="#" className="footer-help">sina247re@gmail.com</a>
              </div>

              <div className="col-xl-3 col-lg-3 col-sm-6 order-sm-2 order-lg-5">
                <span className="footer-title">عضویت در خبرنامه</span>

                <p className="footer-detail">برای دریافت جدید ترین اخبار و اطلاعیه‌ ها در خبرنامه ما عضو شوید</p>

                <div>
                  <form>
                    <div className="form-group">
                      <input type="email" className="form-control d-flex text-end" id="email" name="email" placeholder="ایمیل خود را تایپ کنید" />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="row footer-down">
              <div className="col-lg-5 order-2 order-lg-1 footer-right">
                <p className="footer-p">
                  با افتخار توسط
                  <a href="#" className="footer-a"> سینا احمدی </a>
                  پشتیبانی می‌شود
                </p>
              </div>

              <div className="col-lg-7 order-1 order-lg-2 footer-right">
                <ul className="d-flex justify-content-center mb-0">
                  <li className="ps-2">
                    <a href="#" className="footer-a-2">سیاست حفظ حریم خصوصی</a>
                  </li>

                  <li className="ps-2">
                    <a href="#" className="footer-a-2">قوانین و مقررات</a>
                  </li>

                  <li className="ps-2">
                    <a href="#" className="footer-a-2">حقوق کپی‌ رایت</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html >
  );
}
