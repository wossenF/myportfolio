import { useState } from 'react';
import emailjs from 'emailjs-com';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail, HiUser } from 'react-icons/hi';
import { BsChatTextFill } from 'react-icons/bs';
import Footer from '../components/Footer';
import { Modal } from 'antd';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            to_name: 'Wossen Fekadie',
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message
        };

        emailjs.send('service_ay0blii', 'template_xv466fs', templateParams, 'xUMaIFgmm8ZRvf8AsYct8')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setIsOpen(true);
            }, (error) => {
                console.log('FAILED...', error);
            });
    };

    return (
        <BannerLayout>
            <div className="px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className="text-lg font-bold">Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">Country:</span>
                                <span className="text-LightGray md:text-sm">Ethiopia</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">City:</span>
                                <span className="text-LightGray md:text-sm">Addis Ababa</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">University:</span>
                                <span className="text-LightGray md:text-sm">AAiT</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">Email:</span>
                                <span className="text-LightGray text-sm">wossen.fekadie@gmail.com</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">Linkedin:</span>
                                <span className="text-LightGray text-sm">wossen-fekadie</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">Phone:</span>
                                <span className="text-LightGray text-sm">+251-989-888-038</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className="hover:scale-125 ease-in-out duration-700" href="https://github.com/wossenfekadie1993" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a className="hover:scale-125 ease-in-out duration-700" href="https://www.linkedin.com/in/wossen-fekadie/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a className="hover:scale-125 ease-in-out duration-700" href="https://x.com/WossenF" target="_blank" rel="noreferrer"><FaTwitter /></a>
                </div>
                <div className="my-12 w-full h-auto text-Snow">
                    <h1 className="text-lg font-bold">Get In Touch</h1>
                    <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col w-full">
                                <div className="userIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                        <HiUser />
                                    </div>
                                    <input
                                        type="text"
                                        className="input_stylings"
                                        placeholder="Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="mailIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                        <HiMail />
                                    </div>
                                    <input
                                        type="text"
                                        className="input_stylings"
                                        placeholder="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="textIcon relative mb-6">
                                    <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                        <BsChatTextFill />
                                    </div>
                                    <textarea
                                        rows={6}
                                        cols={50}
                                        className="input_stylings"
                                        placeholder="Message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="my-4">
                                <button type="submit" className="button"> SEND MESSAGE </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Modal
                className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
                centered
                open={isOpen}
                footer={null}
                closable={false}
                onOk={() => setIsOpen(false)}
                onCancel={() => setIsOpen(false)}
            >
                <p>Your message has been sent successfully!</p>
            </Modal>
            <Footer />
        </BannerLayout>
    );
};

export default Contact;
