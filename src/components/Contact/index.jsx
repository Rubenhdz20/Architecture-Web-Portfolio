import React, { useState, useRef } from 'react';
import './Contact.css';

function Contact() {
  const [copied, setCopied] = useState(false); 
  const copiedTextRef = useRef(null); 

  const handleWhatsAppClick = () => {
    const phoneNumber = '+5212215258865'; 
    const url = `https://wa.me/${phoneNumber}`;
      window.location.href = url;
  };

  const copyToClipboard = async () => {
    try {
      const buttonText = document.getElementById('copyButton').textContent;
      await navigator.clipboard.writeText(buttonText);
      setCopied(true); 
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const handleCopyClick = () => {
    copyToClipboard();
    setTimeout(() => {
      setCopied(false); 
    }, 1000); 
  };

  return (
    <>
      <section id="contact-section" className='contact-section'>
        <h1 className='contact__title'>Contáctanos </h1>
        <p className='contact__text'>Para más información sobre nuestros servicios o para discutir su próximo proyecto, por favor, póngase en contacto con nosotros a través de nuestros canales de comunicación. Estamos aquí para ayudarle a transformar su visión en realidad.</p>
        <div className='contact__container'>
          <svg width="50" height="50" viewBox="0 0 1375 1376" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1031.24 1031.51C1221.09 841.666 1221.09 533.865 1031.24 344.018C841.395 154.172 533.593 154.172 343.747 344.018C153.901 533.865 153.901 841.666 343.747 1031.51C533.593 1221.36 841.395 1221.36 1031.24 1031.51Z" fill="url(#paint0_linear_0_784)"/>
  <path d="M424.814 962.885L465.372 811.666C442.446 770.272 430.32 723.861 430.32 676.753C430.32 522.816 555.615 397.52 709.552 397.52C863.489 397.52 988.785 522.816 988.785 676.753C988.785 830.69 863.489 955.986 709.552 955.986C663.35 955.986 617.707 944.348 576.801 922.118L424.814 962.815V962.885ZM584.395 865.463L593.943 871.177C629.065 892.083 669.064 903.164 709.552 903.164C834.43 903.164 936.032 801.561 936.032 676.683C936.032 551.805 834.43 450.203 709.552 450.203C584.674 450.203 483.071 551.805 483.071 676.683C483.071 717.938 494.5 758.495 516.172 794.105L522.027 803.721L499.378 888.181L584.326 865.394L584.395 865.463Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M813.45 715.568C801.952 708.669 786.97 701.003 773.451 706.578C763.067 710.829 756.446 727.066 749.686 735.358C746.202 739.609 742.092 740.306 736.796 738.146C697.771 722.606 667.946 696.613 646.413 660.725C642.789 655.15 643.416 650.759 647.806 645.602C654.287 637.937 662.439 629.226 664.251 618.913C665.993 608.599 661.186 596.543 656.935 587.345C651.5 575.637 645.367 558.844 633.659 552.223C622.858 546.091 608.642 549.506 598.956 557.38C582.37 570.899 574.287 592.084 574.566 613.129C574.566 619.122 575.402 625.045 576.796 630.829C580.141 644.696 586.552 657.658 593.799 669.923C599.235 679.191 605.158 688.181 611.5 696.891C632.336 725.254 658.329 749.854 688.364 768.251C703.346 777.45 719.513 785.532 736.307 791.038C755.053 797.24 771.778 803.721 792.126 799.818C813.38 795.776 834.286 782.676 842.718 762.188C845.227 756.126 846.482 749.366 845.088 742.955C842.231 729.714 824.322 721.839 813.59 715.498L813.45 715.568Z" fill="white"/>
  <defs>
  <linearGradient id="paint0_linear_0_784" x1="343.747" y1="344.019" x2="1031.24" y2="1031.51" gradientUnits="userSpaceOnUse">
  <stop stop-color="#00FF26"/>
  <stop offset="1" stop-color="#00AC1A"/>
  </linearGradient>
  </defs>
          </svg>
          <button className='contact__container--message' onClick={handleWhatsAppClick}>Enviar Mensaje 
          </button>
          <img src="dist/assets/Gmail.jpg" alt="Gmail Account" className='contact__gmail'/>
          {copied && (
            <span ref={copiedTextRef} className='contact__container--message'>
              Copiado!
            </span>
          )}
          <p className='contact__container--message' id="copyButton" onClick={handleCopyClick}> mariana02alvarado@gmail.com</p>
          
        </div>
      </section>
    </>
  ) 
};

export default Contact;