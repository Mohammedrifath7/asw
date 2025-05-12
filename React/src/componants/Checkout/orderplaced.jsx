import React, { useEffect, useState } from 'react';
import { CheckCircle, Home, TruckIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OrderPlaced = () => {
    const navigate = useNavigate();
  const [showCheck, setShowCheck] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Animation sequence
  useEffect(() => {
    // First show check mark
    setTimeout(() => {
      setShowCheck(true);
    }, 500);
    
    // Then show order details
    setTimeout(() => {
      setShowDetails(true);
    }, 1000);
    
    // Then show shipping info
    setTimeout(() => {
      setShowShipping(true);
    }, 1500);
    
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  // Generate random confetti elements
  const generateConfetti = () => {
    const confetti = [];
    for (let i = 0; i < 50; i++) {
      const style = {
        position: 'absolute',
        borderRadius: '50%',
        left: `${Math.random() * 100}%`,
        top: '-20px',
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
        backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
        opacity: '0.7',
        animation: `fall ${Math.random() * 3 + 2}s linear ${Math.random() * 2}s forwards`
      };
      confetti.push(<div key={i} style={style}></div>);
    }
    return confetti;
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #f0f7ff, #f3f0ff)',
    padding: '1.5rem'
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '28rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transform: 'scale(1)',
    transition: 'all 0.7s ease',
    ':hover': {
      boxShadow: '0 20px 35px rgba(0, 0, 0, 0.15)'
    }
  };

  const headerStyle = {
    background: 'linear-gradient(to right, #34d399, #2dd4bf)',
    padding: '1.5rem',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  };

  const headerOverlayStyle = {
    position: 'absolute',
    inset: '0',
    backgroundColor: 'white',
    opacity: '0.1'
  };

  const headerPulseStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 50%)',
    animation: 'pulse 2s infinite'
  };

  const checkIconStyle = {
    margin: '0 auto 1rem auto',
    width: '5rem',
    height: '5rem',
    color: 'white',
    filter: 'drop-shadow(0 4px 3px rgba(0, 0, 0, 0.15))',
    transform: showCheck ? 'scale(1)' : 'scale(0)',
    opacity: showCheck ? '1' : '0',
    transition: 'all 1s ease'
  };

  const titleStyle = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    transform: showCheck ? 'translateY(0)' : 'translateY(2.5rem)',
    opacity: showCheck ? '1' : '0',
    transition: 'all 0.7s ease'
  };

  const subtitleStyle = {
    color: 'rgba(255, 255, 255, 0.9)',
    transform: showCheck ? 'translateY(0)' : 'translateY(2.5rem)',
    opacity: showCheck ? '1' : '0',
    transition: 'all 0.7s ease 0.3s'
  };

  const progressContainerStyle = {
    padding: '1rem 1.5rem'
  };

  const progressBarBgStyle = {
    width: '100%',
    backgroundColor: '#e5e7eb',
    borderRadius: '9999px',
    height: '0.75rem',
    marginBottom: '1.5rem',
    overflow: 'hidden'
  };

  const progressBarStyle = {
    background: 'linear-gradient(to right, #34d399, #2dd4bf)',
    height: '100%',
    borderRadius: '9999px',
    transition: 'all 1s ease-out',
    width: `${progress}%`
  };

  const progressLabelsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    color: '#6b7280',
    marginBottom: '2rem'
  };

  const sectionStyle = {
    padding: '1rem 1.5rem',
    borderTop: '1px solid #f3f4f6'
  };

  const detailsStyle = {
    ...sectionStyle,
    opacity: showDetails ? '1' : '0',
    transform: showDetails ? 'translateY(0)' : 'translateY(2.5rem)',
    transition: 'all 0.7s ease'
  };

  const shippingStyle = {
    ...sectionStyle,
    opacity: showShipping ? '1' : '0',
    transform: showShipping ? 'translateY(0)' : 'translateY(2.5rem)',
    transition: 'all 0.7s ease'
  };

  const sectionTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem'
  };

  const detailsRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.875rem',
    marginBottom: '0.75rem'
  };

  const detailsLabelStyle = {
    color: '#4b5563'
  };

  const detailsValueStyle = {
    fontWeight: '500',
    color: '#1f2937'
  };

  const greenValueStyle = {
    fontWeight: '500',
    color: '#059669'
  };

  const infoRowStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    marginBottom: '1rem'
  };

  const iconContainerStyle = {
    padding: '0.5rem',
    borderRadius: '0.5rem'
  };

  const homeIconContainerStyle = {
    ...iconContainerStyle,
    backgroundColor: '#dbeafe'
  };

  const truckIconContainerStyle = {
    ...iconContainerStyle,
    backgroundColor: '#d1fae5'
  };

  const homeIconStyle = {
    width: '1.25rem',
    height: '1.25rem',
    color: '#2563eb'
  };

  const truckIconStyle = {
    width: '1.25rem',
    height: '1.25rem',
    color: '#059669'
  };

  const infoContentStyle = {
    flex: '1'
  };

  const infoTitleStyle = {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#1f2937'
  };

  const infoSubtitleStyle = {
    fontSize: '0.75rem',
    color: '#4b5563'
  };

  const actionSectionStyle = {
    padding: '1.5rem',
    borderTop: '1px solid #f3f4f6',
    backgroundColor: '#f9fafb'
  };

  const buttonGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem'
  };

  const buttonBaseStyle = {
    padding: '0.75rem 1rem',
    fontWeight: '500',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease'
  };

  const whiteButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: 'white',
    color: '#2563eb',
    border: '1px solid #dbeafe'
  };

  const blueButtonStyle = {
    cursor : "pointer",
    ...buttonBaseStyle,
    backgroundColor: '#2563eb',

    color: 'white',
    border: 'none'
  };

  const footerStyle = {
    padding: '1rem 1.5rem',
    backgroundColor: '#f9fafb',
    borderTop: '1px solid #f3f4f6',
    textAlign: 'center'
  };

  const footerTextStyle = {
    fontSize: '0.875rem',
    color: '#4b5563'
  };

  const confettiContainerStyle = {
    position: 'fixed',
    inset: '0',
    pointerEvents: 'none',
    zIndex: '10'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* Success Header */}
        <div style={headerStyle}>
          <div style={headerOverlayStyle}>
            <div style={headerPulseStyle}></div>
          </div>
          
          <div>
            <CheckCircle style={checkIconStyle} />
          </div>
          
          <h1 style={titleStyle}>
            Order Placed Successfully!
          </h1>
          
          <p style={subtitleStyle}>
            Your order has been confirmed and is being processed
          </p>
        </div>
        
        {/* Order Progress */}
        <div style={progressContainerStyle}>
          <div style={progressBarBgStyle}>
            <div style={progressBarStyle}></div>
          </div>
          
          <div style={progressLabelsStyle}>
            <span>Order Confirmed</span>
            <span>Processing</span>
            <span>Shipping</span>
            <span>Delivered</span>
          </div>
        </div>
        
        {/* Order Details */}
        <div style={detailsStyle}>
          <h2 style={sectionTitleStyle}>Order Details</h2>
          
          <div>
            <div style={detailsRowStyle}>
              <span style={detailsLabelStyle}>Order Number:</span>
              <span style={detailsValueStyle}>#ORD-2458963</span>
            </div>
            
            <div style={detailsRowStyle}>
              <span style={detailsLabelStyle}>Date:</span>
              <span style={detailsValueStyle}>May 12, 2025</span>
            </div>
            
            <div style={detailsRowStyle}>
              <span style={detailsLabelStyle}>Payment Method:</span>
              <span style={detailsValueStyle}>Credit Card (****4582)</span>
            </div>
            
            <div style={detailsRowStyle}>
              <span style={detailsLabelStyle}>Total Amount:</span>
              <span style={greenValueStyle}>$149.99</span>
            </div>
          </div>
        </div>
        
        {/* Shipping Info */}
        {/* <div style={shippingStyle}>
          <h2 style={sectionTitleStyle}>Shipping Information</h2>
          
          <div style={infoRowStyle}>
            <div style={homeIconContainerStyle}>
              <Home style={homeIconStyle} />
            </div>
            <div style={infoContentStyle}>
              <p style={infoTitleStyle}>John Doe</p>
              <p style={infoSubtitleStyle}>123 Main Street, Apt 4B</p>
              <p style={infoSubtitleStyle}>New York, NY 10001</p>
            </div>
          </div>
          
          <div style={infoRowStyle}>
            <div style={truckIconContainerStyle}>
              <TruckIcon style={truckIconStyle} />
            </div>
            <div style={infoContentStyle}>
              <p style={infoTitleStyle}>Estimated Delivery</p>
              <p style={infoSubtitleStyle}>May 15 - May 18, 2025</p>
              <p style={infoSubtitleStyle}>Standard Shipping</p>
            </div>
          </div>
        </div>
         */}
        {/* Action Buttons */}
        <div style={actionSectionStyle}>
          <div style={buttonGridStyle}>
            <button style={whiteButtonStyle}>
              Track Order
            </button>
            <button  onClick={() => navigate("/") }   style={blueButtonStyle}>
              Continue Shopping
            </button>
          </div>
        </div>
        
        {/* Thanks Message */}
        <div style={footerStyle}>
          <p style={footerTextStyle}>
            Thank you for your purchase! We'll send updates to your email.
          </p>
        </div>
      </div>
      
      {/* Animated Confetti Effect */}
      <div style={confettiContainerStyle}>
        {generateConfetti()}
      </div>
      
      {/* Keyframe animation styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fall {
            0% {
              transform: translateY(-20px) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.7;
            }
            100% {
              transform: translateY(calc(100vh + 20px)) rotate(360deg);
              opacity: 0;
            }
          }
          
          @keyframes pulse {
            0% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              opacity: 0.2;
            }
          }
        `
      }} />
    </div>
  );
};

export default OrderPlaced;