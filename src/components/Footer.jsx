function Footer() {

    return (

        <footer className="bg-black text-gray-300">

            {/* Top Footer */}

            <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">

                {/* Get In Touch */}

                <div>

                    <h3 className="text-xl font-semibold text-white mb-4">
                        GET IN TOUCH
                    </h3>

                    <p className="text-sm leading-relaxed">
                        If you have any questions about the services we provide,
                        get in touch with us. We try and respond to all queries
                        and comments within 24 hours.
                    </p>

                </div>


                {/* Address Info */}

                <div>

                    <h3 className="text-xl font-semibold text-white mb-4">
                        Address Info
                    </h3>

                    <div className="space-y-3 text-sm">

                        <p>
                            📍 Plot No. 33, Prestige Park, Nashik, India
                        </p>

                        <p>
                            ☎ 0253-3590063
                        </p>

                        <p>
                            ✉ idealcoachingclassesnashikroad@gmail.com
                        </p>

                    </div>

                </div>


                {/* Google Map */}

                <div className="w-full h-56 rounded-lg overflow-hidden border border-gray-700">

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.2701792828907!2d73.8285468!3d19.955136799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd95616bffffff%3A0x22fdaeee52364279!2sIdeal%20Coaching%20Classes!5e0!3m2!1sen!2sin!4v1773593939839!5m2!1sen!2sin" width="400" height="300" loading="lazy"></iframe>
                </div>

            </div>


            {/* Bottom Footer */}

            <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">

                © 2026 Ideal Coaching Classes. All rights reserved

            </div>

        </footer>
    );
}

export default Footer;