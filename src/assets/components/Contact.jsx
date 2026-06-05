import React, { useState } from "react";
import { toast } from "react-toastify";
import { saveContact } from "../../services/contactService";
import { FaLinkedin } from "react-icons/fa";
import { LuMail, LuLink, LuCaravan } from "react-icons/lu";
import { BiLocationPlus } from "react-icons/bi";


const Contact = () => {
    const requiredFields = ["name", "email", "phone", "message"];

    const [errors, setErrors] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [FormData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: false,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        let newErrors = {};

        requiredFields.forEach((field) => {
            if (!FormData[field].trim()) {
                newErrors[field] = true;
            }
        });

        if (
            FormData.name.trim() &&
            !/^[A-Za-z\s]+$/.test(FormData.name)
        ) {
            newErrors.name = true;
        }

        if (
            FormData.email.trim() &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(FormData.email)
        ) {
            newErrors.email = true;
        }

        if (
            FormData.phone.trim() &&
            !/^[0-9]{10}$/.test(FormData.phone)
        ) {
            newErrors.phone = true;
        }

        if (
            FormData.linkedin.trim() &&
            !/^https?:\/\/(www\.)?linkedin\.com\/.*$/i.test(FormData.linkedin)
        ) {
            newErrors.linkedin = true;
        }

        if (
            FormData.message.trim() &&
            FormData.message.trim().length < 10
        ) {
            newErrors.message = true;
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            toast.error("Please fix the highlighted fields");
            setIsSubmitting(false);
            return;
        }

        try {
            const result = await saveContact(FormData);
            toast.success(result.message || "Thanks for contacting");
            setIsSubmitting(false);

            setFormData({
                name: "",
                email: "",
                phone: "",
                linkedin: "",
                message: "",
            });

            setErrors({});
        } catch (error) {
            toast.error("Something went wrong");
            console.error(error);
        }
        finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full py-12 md:px-2 lg:px-4 flex justify-center"id="contact">
            <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">

                {/* Left Side Contact Details */}
                <div className="lg:w-1/2 card bg-base-100 shadow-xl border border-base-300" data-aos="fade-right">
                    <div className="card-body">

                        <div className="mb-4">
                            <h2 className="text-3xl font-bold">
                                Get In Touch
                            </h2>

                            <p className="text-base-content/70 mt-2">
                                Open to internships, full-time opportunities,
                                freelance projects, and collaborations.
                            </p>
                        </div>

                        <div className="mb-4">
                            <a
                                href="/Rajeev_Ranjan_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-accent text-white gap-2"
                            >
                                📄 View Resume
                            </a>
                        </div>

                        <div className="space-y-4">

                            <div className="bg-base-200 rounded-lg p-4">
                                <h3 className="font-semibold text-lg mb-1 flex gap-2 items-center">
                                    <LuMail /> Email
                                </h3>
                                <p>rajeevranjan7909@gmail.com</p>
                            </div>

                            <div className="bg-base-200 rounded-lg p-4">
                                <h3 className="font-semibold text-lg mb-1 flex gap-2 items-center">
                                    <BiLocationPlus /> Location
                                </h3>
                                <p>Vapi, Gujarat, India</p>
                            </div>

                            <div className="bg-base-200 rounded-lg p-4">
                                <h3 className="font-semibold text-lg mb-1 flex gap-2 items-center">
                                    <LuLink />   LinkedIn
                                </h3>

                                <a
                                    href="https://www.linkedin.com/in/rajeevranjan7909"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-primary hover:underline"
                                >
                                    <FaLinkedin size={20} />
                                    Connect with me
                                </a>
                            </div>

                            <div className="bg-base-200 rounded-lg p-4">
                                <h3 className="font-semibold text-lg mb-1 flex gap-2 items-center">
                                    <LuCaravan /> Availability
                                </h3>
                                <p>
                                    Available for Full-Time Roles,
                                    Internships, and Freelance Projects.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right Side Contact Form */}
                <div className="lg:w-1/2 card bg-base-100 shadow-xl" data-aos="fade-left">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center mb-6">
                            Contact Me
                        </h2>

                        <form className="space-y-4">
                            {/* Name */}
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={FormData.name}
                                    onChange={handleChange}
                                    className={`input input-bordered w-full focus-within:outline-none focus-within:ring-0 ${errors.name
                                        ? "input-error"
                                        : ""
                                        }`}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        Email
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={FormData.email}
                                    onChange={handleChange}
                                    className={`input input-bordered w-full focus-within:outline-none focus-within:ring-0 ${errors.email
                                        ? "input-error"
                                        : ""
                                        }`}
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        Phone Number
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your number"
                                    name="phone"
                                    value={FormData.phone}
                                    onChange={handleChange}
                                    className={`input input-bordered w-full focus-within:outline-none focus-within:ring-0 ${errors.phone
                                        ? "input-error"
                                        : ""
                                        }`}
                                />
                            </div>

                            {/* LinkedIn */}
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        LinkedIn Profile
                                    </span>
                                </label>
                                <input
                                    type="url"
                                    placeholder="https://linkedin.com/in/your-profile"
                                    name="linkedin"
                                    value={FormData.linkedin}
                                    onChange={handleChange}
                                    className={`input input-bordered w-full focus-within:outline-none focus-within:ring-0 ${errors.linkedin
                                        ? "input-error"
                                        : ""
                                        }`}
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        Message
                                    </span>
                                </label>
                                <textarea
                                    placeholder="Write your message..."
                                    name="message"
                                    value={FormData.message}
                                    onChange={handleChange}
                                    className={`textarea textarea-bordered w-full h-32 focus-within:outline-none focus-within:ring-0 ${errors.message
                                        ? "input-error"
                                        : ""
                                        }`}
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="btn btn-accent text-white w-full"
                                onClick={handleSubmit}
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;