"use client";

import { useState } from "react";

export default function FormComponent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mnndklwz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("送信に失敗しました。しばらくしてから再度お試しください。");
      }
    } catch {
      setError("送信に失敗しました。ネットワーク環境をご確認ください。");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full text-[0.8em] sm:text-[1.2em] py-2 sm:py-0">
      <section className="w-full bg-blue-50 py-32 px-0">
        <div className="w-full text-white rounded-none py-24 px-8 sm:px-8 max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold mb-2 text-left text-blue-600">Contact</h2>
          <div className="text-3xl font-semibold mb-4 text-left text-blue-600">お問い合わせ</div>
        </div>
      </section>
      <section id="contact" className="w-full max-w-3xl mx-auto px-4 py-12 mt-12">
        {submitted ? (
          <div className="bg-green-100 text-green-800 rounded p-8 text-center text-xl shadow">
            お問い合わせありがとうございました。送信が完了しました。
          </div>
        ) : (
          <>
            <div className="mb-8 px-4 sm:px-0 text-gray-700 text-lg max-w-prose text-pretty leading-relaxed text-balance">
              以下のお問い合わせフォームよりお気軽にお問い合わせください。<br />全てのお問い合わせへの回答が困難な場合もございます。予めご了承ください。
            </div>
            {error && (
              <div className="bg-red-100 text-red-700 rounded p-4 mb-4 text-center text-base shadow">
                {error}
              </div>
            )}
            <form
              className="grid gap-6 bg-white rounded shadow p-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block font-semibold mb-1" htmlFor="name">お名前<span className="text-red-500 ml-1">*</span></label>
                <input className="w-full border rounded px-3 py-2" id="name" name="name" type="text" required disabled={loading} />
              </div>
              <div>
                <label className="block font-semibold mb-1" htmlFor="email">メールアドレス<span className="text-red-500 ml-1">*</span></label>
                <input className="w-full border rounded px-3 py-2" id="email" name="email" type="email" required disabled={loading} />
              </div>
              <div>
                <label className="block font-semibold mb-1" htmlFor="message">お問い合わせ内容<span className="text-red-500 ml-1">*</span></label>
                <textarea className="w-full border rounded px-3 py-2" id="message" name="message" rows={5} required disabled={loading} />
              </div>
              <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition disabled:opacity-60" disabled={loading}>{loading ? "送信中..." : "送信"}</button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
