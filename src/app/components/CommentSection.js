"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

export default function CommentSection() {
  const [form, setForm] = useState({ name: "", comment: "" });
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(0);

  // Ekran genişliğine göre gösterilecek yorum sayısı
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(data);
    });
    return () => unsubscribe();
  }, []);

  // Responsive kontrolü
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
      setPage(0); // Ekran değişince başa dön
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sayfa başına gösterilecek yorumlar
  const pagesCount = Math.ceil(comments.length / itemsPerPage);

  const startIndex = page * itemsPerPage;
  const currentComments = comments.slice(startIndex, startIndex + itemsPerPage);

  const goPrev = () => setPage((p) => Math.max(p - 1, 0));
  const goNext = () => setPage((p) => Math.min(p + 1, pagesCount - 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.comment) return;
    await addDoc(collection(db, "comments"), {
      ...form,
      createdAt: serverTimestamp(),
    });
    setForm({ name: "", comment: "" });
  };

  return (
    <div className="mt-12 max-w-3xl mx-auto">
      <div className="relative flex flex-col items-center justify-center gap-6">
        {/* Sol Ok */}
        <button
          onClick={goPrev}
          disabled={page === 0}
          className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          aria-label="Önceki yorumlar"
        >
          &#8592;
        </button>

        {/* Kartlar */}
        <div className="flex gap-6 flex-wrap justify-center px-4">
          {currentComments.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-sm min-h-[180px] bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md border border-blue-100 flex flex-col"
            >
              <p className="italic text-gray-700 text-lg overflow-hidden">
                &quot;{item.comment.length > 220 ? item.comment.slice(0, 220) + "..." : item.comment}&quot;
              </p>
              <p className="mt-auto text-right font-semibold text-blue-800">
                - {item.name}
              </p>
            </div>
          ))}
          {currentComments.length === 0 && (
            <p className="text-center text-gray-500">Henüz yorum yok.</p>
          )}
        </div>

        {/* Sağ Ok */}
        <button
          onClick={goNext}
          disabled={page >= pagesCount - 1}
          className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          aria-label="Sonraki yorumlar"
        >
          &#8594;
        </button>
      </div>

      {/* Yorum Ekle Formu */}
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 mt-12">
        Siz de yorum bırakın
      </h3>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        <input
          name="name"
          placeholder="Adınız"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="comment"
          placeholder="Yorumunuz"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          required
          rows="4"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Yorumu Gönder
        </button>
      </form>
    </div>
  );
}