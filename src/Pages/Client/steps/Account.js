import { useStepperContext } from "../StepperContext";
import "./Account.css";
export default function Account() {
  const { userData, setUserData } = useStepperContext();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500 inline-block">
          Username <span className="text-red-500 font-bold">*</span>
        </div>
        <div class="info1 relative text-blue-500 text-xl">&#x24D8; </div>
        <div className="username_format absolute bg-white text-gray-800 rounded p-2">
          <p className="mb-2">
            Username
            <ul>
              <li>&#x2022; Should be 4-16 characters long</li>
              <li>&#x2022; Should start with a letter</li>
              <li>&#x2022; can contain only Uppercase and Lowercase letters, numbers and underscore</li>
            </ul>
          </p>
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder="Username"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500 inline-block">
          Password <span className="text-red-500 font-bold">*</span>
        </div>
        <div class="info2 relative text-blue-500 text-xl">&#x24D8; </div>
        <div className="password_format absolute bg-white text-gray-800 rounded p-2">
          <p className="mb-2">
            Password
            <ul>
              <li>&#x2022; Should be 8-20 characters</li>
              <li>&#x2022; Should have at least one uppercase letter</li>
              <li>&#x2022; Should have at least one lowercase letter</li>
              <li>&#x2022; Should have at least one number</li>
              <li>&#x2022; Should have at least one special character</li>
            </ul>
          </p>
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["password"] || ""}
            name="password"
            placeholder="Password"
            type="password"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
