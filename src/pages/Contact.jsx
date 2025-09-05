import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b61f2b11-5b66-41d5-9a96-b082fff309de");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      event.target.reset();
      toast.success("Message Delivered Successfully");
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div className="contact-section " id="contact">
      <ToastContainer />
      <h2 className="contact-title">
        Contact <span className="text-orange-600">Us</span>
      </h2>
      <form
        onSubmit={onSubmit}
        className="max-w-2xl !mx-auto text-gray-600 !pt-8"
      >
        <div className="flex flex-wrap">
          <div
            className="
        w-full md:w-1/2 text-left"
          >
            Your Name
            <input
              className="w-full border border-orange-300 rounded !py-3 !px-4 !mt-2 "
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:!pl-4">
            Your Email
            <input
              className="w-full border border-orange-300 rounded !py-3 !px-4 !mt-2 "
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="!my-6 text-left">
          Message{" "}
          <textarea
            className="w-full border border-orange-400 rounded !py-3 !px-4 !mt-2 !h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="bg-orange-600 text-white !px-12 !py-2 !mb-10 rounded ">
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
}
