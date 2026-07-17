import Link from "next/link";

export default function EditProductFallback() {
  return (
    <div className="max-w-[1400px] mx-auto bg-white border border-border-light p-12 text-center">
      <p className="text-body-muted mb-4">No product selected to edit.</p>
      <Link
        href="/admin/product"
        className="inline-flex bg-forest hover:bg-mint hover:text-ink text-white font-bold px-5 py-2.5 transition-colors"
      >
        Back to Products
      </Link>
    </div>
  );
}
