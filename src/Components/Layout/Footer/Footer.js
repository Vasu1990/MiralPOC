import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="newsletter-wrap">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <div className="module-header">
                                <h3 className="module-title">News Letter</h3>
                                <div className="module-sep"><div className="decorative-icons"></div><div className="decorative-bars"></div></div>
                                <p className="module-subtitle">Get 15% off your next order. Be the first to learn about promotions special events, new arrivals and more</p>
                            </div>
                            
                            <form id="subscribeForm" className="subscribe-form" action="#" method="post">
                                <input type="email" name="email" placeholder="YOUR EMAIL" required=""/>
                                <button type="submit" name="emailsubmit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className="footer-head">
                    <div className="display-flex">
                        <div className="col-md-4 col-sm-5">
                            <a className="site-logo footer-logo" href="#"><img src="assets/img/color-1/template/logo-white.png" alt="logo-white"/> </a>
                        </div>
                        <div className="col-md-8 col-sm-7">
                            <ul className="socials">
                                <li className="social facebook-icon"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li className="social twitter-icon"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li className="social googleplus-icon"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li className="social rss-icon"><a href="#"><i className="fa fa-rss"></i></a></li>
                                <li className="social pinterest-icon"><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                <li className="social linkedin-icon"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li className="social youtube-icon"><a href="#"><i className="fa fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                    
                <div className="footer-widget-area">
                    <div className="footer-widgets">
                        <div className="col-md-3 col-sm-6">
                            <div className="widget contact-widget">
                                <h3 className="widget-title">Contact Us</h3>
                                <div className="widget-content">
                                    <div className="contact-infos">
                                        <div className="contact-info">
                                            <p><b>Add:</b>Lafayette has a great customer service</p>
                                        </div>
                                        <div className="contact-info">
                                            <p><b>Tel:</b>02 8000 11 800</p>
                                        </div>
                                        <div className="contact-info">
                                            <p><b>Email:</b><a href="#">Company@gmail.com</a></p>
                                        </div>
                                        <div className="contact-info">
                                            <p><b>Hotline:</b><a href="#">999-507-1256</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-2 col-sm-6">
                            <div className="widget custom-menu-widget">
                                <h3 className="widget-title">About Us</h3>
                                <div className="widget-content">
                                    <ul className="menu custom-menu about-menu">
                                        <li><a href="#">Subscribe</a></li>
                                        <li><a href="#">Unsubscribe</a></li>
                                        <li><a href="#">Help</a></li>
                                        <li><a href="#">How to Uninstall</a></li>
                                        <li><a href="#">About Company</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-2 col-sm-4">
                            <div className="widget custom-menu-widget">
                                <h3 className="widget-title">Help</h3>
                                <div className="widget-content">
                                    <ul className="menu custom-menu help-menu">
                                        <li><a href="#">Tortor massa</a></li>
                                        <li><a href="#">Proident et facilisi</a></li>
                                        <li><a href="#">Per esse</a></li>
                                        <li><a href="#">Magnis integer</a></li>
                                        <li><a href="#">Aptent lacinia</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-2 col-sm-4">
                            <div className="widget custom-menu-widget">
                                <h3 className="widget-title">Our services</h3>
                                <div className="widget-content">
                                    <ul className="menu custom-menu service-menu">
                                        <li><a href="#">Curo concerns</a></li>
                                        <li><a href="#">Hare thery</a></li>
                                        <li><a href="#">Phease incocal</a></li>
                                        <li><a href="#">Scelerisque</a></li>
                                        <li><a href="#">Natoque</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-3 col-sm-4">
                            <div className="widget recent-post-widget">
                                <h3 className="widget-title">Recent post</h3>
                                <div className="widget-content">
                                    <div className="recent-posts">
                                        <div className="recent-post">
                                            <a className="recent-post-thumb" href="#"><img src="assets/img/blog/sthumb-1.jpg" alt="..."/></a>
                                            <div className="recent-post-cotent">
                                                <h5 className="recent-post-title"><a href="#">Cartown Features List</a></h5>
                                                <p className="recent-post-date">April 4th, 2017</p>
                                            </div>
                                        </div>
                                        <div className="recent-post">
                                            <a className="recent-post-thumb" href="#"><img src="assets/img/blog/sthumb-2.jpg" alt="..."/></a>
                                            <div className="recent-post-cotent">
                                                <h5 className="recent-post-title"><a href="#">Cartown Features List</a></h5>
                                                <p className="recent-post-date">April 4th, 2017</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                
                <div className="lower-footer-area">
                    <div className="lower-footer-inner">
                        <div className="row">
                            <div className="display-flex">
                                <div className="col-sm-6">
                                    <p className="copyright">Copyright 2017 - CodeChant. All rights reserved</p>
                                </div>
                                <div className="col-sm-6">
                                    <div className="payments">
                                        <a href="#" className="payment"><img src="assets/img/payment/1.png" alt="..."/></a>
                                        <a href="#" className="payment"><img src="assets/img/payment/2.png" alt="..."/></a>
                                        <a href="#" className="payment"><img src="assets/img/payment/3.png" alt="..."/></a>
                                        <a href="#" className="payment"><img src="assets/img/payment/4.png" alt="..."/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
