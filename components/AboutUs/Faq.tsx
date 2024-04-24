"use client"
import React, { useState } from 'react';

function Faq() {
    const [currentindex, setCurrentindex] = useState(0)
    const [question, setQuestion] = useState('What services does Amahmatch offer?');
    const [answer, setAnswer] = useState("Amahmatch aims to make booking easy. You can sign up and schedule a cleaning directly through their website or app. This likely involves specifying the date, time, and desired service for your home.Simply specify your requirements when booking, and we'll match you with a worker who can meet your needs.");

    const questions = ["What services does Amahmatch offer?", "How do I book a worker's service through Amahmatch?", "Are the workers on Amahmatch vetted and trustworthy?", "How can I cancel or reschedule a maid service appointment?", "Is there a customer support team available if I have questions or need assistance?"];
    const answers = ["Amahmatch aims to make booking easy. You can sign up and schedule a cleaning directly through their website or app. This likely involves specifying the date, time, and desired service for your home.Simply specify your requirements when booking, and we'll match you with a worker who can meet your needs.", "Amahmatch aims to make booking easy. You can sign up and schedule a cleaning directly through their website or app. This likely involves specifying the date, time, and desired service for your home.Simply specify your requirements when booking, and we'll match you with a worker who can meet your needs.", "Amahmatch aims to make booking easy. You can sign up and schedule a cleaning directly through their website or app. This likely involves specifying the date, time, and desired service for your home.We take your safety and security seriously, ensuring that only reliable and trustworthy workers are available on our platform.", "Amahmatch understands that schedules can change. They likely offer a user-friendly system through your Amahmatch account where you can easily cancel or reschedule your cleaning appointment. This may involve giving them proper notice to allow them to adjust their schedule as well.", "Yes, we have a dedicated customer support team available to assist you with any questions or concerns you may have. You can reach out to us via email or through our website, and we'll be happy to help."];

    const ico = ["./circle.png", "./circledark.png"]
    const arr = ["./arrow.png", "./arrowdark.png"]

    const handleQuestionClick = (index: number) => {
        setCurrentindex(index)
        setQuestion(questions[index]);
        setAnswer(answers[index]);
    };

    return (
        <div className='md:ml-20 ml-4'>
            <div className='font-bold md:text-4xl mb-12 mt-6'>Frequently Asked Questions</div>
            <div className='md:flex'>
                <div className='relative z-20 bg-white top-4 '>
                    {questions.map((q, index) => (
                        <div key={index} className='border-2 flex hover:bg-slate-100' onClick={() => handleQuestionClick(index)}>
                            {index === currentindex ? (
                                <img src="./circledark.png" className='h-1/2 p-4'></img>
                            ) : (
                                <img src="./circle.png" className='h-1/2 p-4'></img>
                            )}
                            <div className='p-4'>{q}</div>
                            <div className='flex items-end'>
                                <div className='p-4'>
                                    {index === currentindex ? (
                                        <img src="./arrowdark.png" className='h-1/2'></img>
                                    ) : (
                                        <img src="./arrow.png" className='h-1/2'></img>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='flex-1 md:absolute right-20 bg-slate-100 md:w-2/5 md:pl-28 p-12 rounded-lg z-10'>
                    <div className='font-bold py-4 md:text-xl'>{question}</div>
                    <div className='md:text-lg'>{answer}</div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
