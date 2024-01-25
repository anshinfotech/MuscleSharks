import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verifyOtp } from '../../components/redux/action/userAction';
import { useNavigate } from 'react-router-dom';
import NavbarComp from '../../components/Navbar/Navbar';

const EmailVerification = () => {
  const email = localStorage.getItem("email");
  console.log(email);

  const [formData, setFormData] = useState({
    email: email,
    otp: '',
  });

  const [countdown, setCountdown] = useState(300); // Initial countdown time in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedCountdown = `${Math.floor(countdown / 60)}:${(countdown % 60)
    .toString()
    .padStart(2, '0')}`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyOtp(formData, navigate));
  };

  return (
    <>
      <NavbarComp />
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email {email}</p>
              </div>
            </div>

            <form action="" method="post" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">

                  <input
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 p-4 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-amber-700"
                    type="text"
                    placeholder="Enter OTP"
                    name="otp"
                    value={formData.otp}
                    onChange={handleInputChange}
                    maxLength="4"
                  />
                </div>
                <div className="flex flex-col space-y-5">
                
                <div className="text-sm text-center font-medium text-gray-400">
                    <p>Time remaining: {formattedCountdown}</p>
                  </div>

                  <div>
                    <button
                      className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-amber-500 border-none text-white text-sm shadow-sm"
                      type="submit"
                    >
                      Verify Account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn{"'"}t receive code?</p> <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailVerification;
