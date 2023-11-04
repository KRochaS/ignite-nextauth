import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { withSSRGuest } from "../utils/withSSRGuest";

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext(AuthContext);


    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            email,
            password
        }

        await signIn(data);
    }

    return (

        <>
        <div className="h-full w-full flex items-center justify-center flex-col"> 
        <form className="flex flex-col bg-gray-400 p-8 rounded-2xl" onSubmit={handleSubmit}>
            <label className="mb-2 text-white text-base font-semibold"> E-mail </label>
            <input className="bg-gray-960 h-12 w-72 rounded  pl-2 mb-4 text-white" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <label className="mb-2 text-white text-base font-semibold"> Password </label>
            <input className="bg-gray-960 h-12 w-72 rounded pl-2 text-white" type="password" value={password} onChange={e => setPassword(e.target.value)} />

            <button className="bg-gradient-to-r from-orange-100 to-purple-300 mt-6 h-12 w-72 rounded text-white text-base font-semibold" type="submit"> Enter </button>
        </form>

        </div>
        
        </>
    )
}


export const getServerSideProps = withSSRGuest(async (ctx) => {
    return {
        props: {

        }
    }
})