export default function AdminLoginPage() {
  return (
    <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-md place-items-center">
      <form className="w-full border border-[#d8dde5] bg-white p-7 shadow-sm">
        <p className="text-xs uppercase tracking-[0.22em] text-[#8a6a34]">Secure access</p>
        <h1 className="mt-3 text-3xl font-semibold">Admin login</h1>
        <label className="mt-8 block text-sm font-medium">
          Email
          <input className="mt-2 w-full border border-[#d8dde5] p-3 outline-none focus:border-[#c9a96a]" type="email" />
        </label>
        <label className="mt-4 block text-sm font-medium">
          Password
          <input className="mt-2 w-full border border-[#d8dde5] p-3 outline-none focus:border-[#c9a96a]" type="password" />
        </label>
        <button type="button" className="mt-6 w-full bg-[#07111f] px-5 py-3 font-semibold text-white">
          Sign in
        </button>
        <p className="mt-4 text-xs leading-5 text-[#697386]">
          Connect Supabase Auth and restrict this route to users with an admin role.
        </p>
      </form>
    </div>
  );
}
