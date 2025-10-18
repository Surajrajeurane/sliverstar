import React, { useState } from 'react';

interface PaymentModalProps {
  onClose: () => void;
  onPaymentComplete: () => void;
  email: string;
}

type PaymentMethod = 'upi' | 'crypto';

const CopyButton: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopy} className="ml-2 p-1 text-slate-500 hover:text-sky-600 rounded-md transition">
      {copied ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" /></svg>
      )}
    </button>
  );
};


const PaymentModal: React.FC<PaymentModalProps> = ({ onClose, onPaymentComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');
  const upiId = 'surajurane12-2@okaxis';
  const upiQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=${upiId}%26pn=Silverstar%20India%26am=1670%26cu=INR`;
  const cryptoAddress = 'TDqChyp3s5vVDxZEoNP6i6kbZ7WKNhXg2Q';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md transform transition-all" role="dialog" aria-modal="true">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center">
          <h3 className="text-xl font-bold text-slate-800">Complete Your Payment</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-6">
          <div className="text-center mb-6">
            <p className="text-slate-600">Platform Fee</p>
            <p className="text-4xl font-extrabold text-slate-900">$20 <span className="text-lg font-medium text-slate-500">USD</span></p>
          </div>

          <div className="flex border border-slate-200 rounded-lg p-1 mb-6">
            <button onClick={() => setPaymentMethod('upi')} className={`w-1/2 py-2 rounded-md transition ${paymentMethod === 'upi' ? 'bg-slate-800 text-white shadow' : 'text-slate-600 hover:bg-slate-100'}`}>UPI</button>
            <button onClick={() => setPaymentMethod('crypto')} className={`w-1/2 py-2 rounded-md transition ${paymentMethod === 'crypto' ? 'bg-slate-800 text-white shadow' : 'text-slate-600 hover:bg-slate-100'}`}>Crypto</button>
          </div>

          {paymentMethod === 'upi' && (
            <div className="space-y-4 text-center">
              <p className="text-slate-600">Scan the QR code or use the UPI ID below.</p>
              <img src={upiQrUrl} alt="UPI QR Code" className="mx-auto rounded-lg border-4 border-slate-200"/>
              <div className="bg-slate-100 p-3 rounded-lg flex items-center justify-center">
                <code className="text-slate-800 font-medium">{upiId}</code>
                <CopyButton textToCopy={upiId} />
              </div>
            </div>
          )}

          {paymentMethod === 'crypto' && (
            <div className="space-y-4 text-center">
              <p className="text-slate-600">Send USDT (TRC20 Network) to the address below.</p>
               <div className="bg-slate-100 p-3 rounded-lg break-all">
                <code className="text-slate-800 font-medium text-sm">{cryptoAddress}</code>
                <CopyButton textToCopy={cryptoAddress} />
              </div>
              <p className="text-xs text-red-500">Warning: Sending any other coin to this address may result in the loss of your deposit.</p>
            </div>
          )}
        </div>
        
        <div className="p-6 bg-slate-50 rounded-b-xl">
           <p className="text-sm text-slate-500 mb-4 text-center">After completing the payment, click the button below. We will verify your payment and begin the process.</p>
           <button 
             onClick={onPaymentComplete}
             className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
           >
             I Have Completed The Payment
           </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;