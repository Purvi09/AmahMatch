"use client";

import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const contactSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email().min(1),
    phoneNumber: z.string().min(1).max(10),
    businessCategory: z.string().min(1),
    totalRevenue: z.string().min(1),
    message: z.string().min(1),
  });

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      businessCategory: "",
      totalRevenue: "",
      message: "",
    },
  });

  const { handleSubmit, register, formState: { errors } } = form;

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    if (isSubmitting) return; // If the form is already submitting, do nothing

    console.log("Pressed");
    setIsSubmitting(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      setError(errorMessage);
      setIsSubmitting(false);
      return;
    }else{
      form.reset();

      const successMessage = await response.text();
      setSuccess(successMessage); // Set success message
      setIsSubmitting(false);
    }

  };

  return (
    <div className="mt-40 grid place-items-center">
      <div className="font-bold text-4xl p-10 text-textPurple">Get in Touch</div>
      <div className="text-textPurple pb-10 w-3/4 text-center text-sm md:text-lg"> Run your advertisements or promotions etc over our mobile app used by millions of gig workers, white color people and businesses. Absolute confidentiality and same-day replies are our promise to you!</div>
      
      <div className="md:flex justify-center space-x-8">
      <div className="md:w-1/2 md:ml-16">

      {success && <p className="text-green-500 p-4">{success}</p>}
      {error && <p className="text-red-500 p-4">{error}</p>}
      
      <div className="p-4 justify-between ">
        <div className="text-xl font-extralight w-full pb-2">First Name</div>
        <input type="text" placeholder="Enter First Name" className="border-2 rounded w-full h-14 p-2 text-lg" {...register("firstName")}></input>
        {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
      </div>

      <div className="justify-between p-4 ">
        <div className="text-xl font-extralight w-full pb-2">Last Name</div>
        <input type="text" placeholder="Enter Last Name" className="border-2 rounded w-full h-14 p-2 text-lg" {...register("lastName")}></input>
        {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
      </div>

      <div className="p-4 ">
        <div className="text-xl font-extralight w-full pb-2">Email</div>
        <input type="text" placeholder="Enter Email Id" className="border-2 rounded w-full h-14 p-2 text-lg" {...register("email")}></input>
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="p-4 ">
        <div className="text-xl font-extralight w-full pb-2">Business category</div>
        <input type="text" placeholder="Enter Business Category" className="border-2 rounded w-full h-14 p-2 text-lg" {...register("businessCategory")}></input>
        {errors.businessCategory && <p className="text-red-500">{errors.businessCategory.message}</p>}
      </div>

      <div className="justify-between p-4">
        <div className="text-xl font-extralight w-full pb-2">Phone Number</div>
        <input type="text" placeholder="Enter Phone Number" className="border-2 rounded w-full h-14 p-2 text-lg" {...register("phoneNumber")}></input>
        {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
      </div>

      <div className="justify-between p-4">
        <div className="text-xl font-extralight w-full pb-2">Total Revenue</div>
        <input type="text" placeholder="Enter Total Revenue" className="border-2 rounded w-full h-14 p-2 text-lg" {...register("totalRevenue")}></input>
        {errors.totalRevenue && <p className="text-red-500">{errors.totalRevenue.message}</p>}
      </div>

      <div className="p-4 pb-10">
        <div className="text-xl font-extralight w-full pb-2">Write your message</div>
        <input type="text" placeholder="Please write if you have any further query!" className="border-2 rounded w-full h-32 px-2 text-lg" {...register("message")}></input>
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
      </div>
      <button className="bg-textPurple border-2 rounded w-full p-2 text-xl rounded-lg text-white mb-16 p-6" type="submit" onClick={handleSubmit(onSubmit)}>Send Message</button>
      </div>
      <img src="./contact.png" className=" md:h-1/2 md:w-1/2 mb-4"></img>
      </div>
      
    </div>
  );
  }