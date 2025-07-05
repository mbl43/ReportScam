// ReportForm.jsx
import { useState } from "react";
import { supabase } from "../../Dababase/Supabaseclient";
export default function Reportform() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    imageFile: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageFile") {
      setFormData({ ...formData, imageFile: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    console.log(e.value);

    try {
      let imageUrl = null;

      if (formData.imageFile) {
        const fileName = `${Date.now()}_${formData.imageFile.name}`;

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("report-images")
          .upload(fileName, formData.imageFile);

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from("report-images")
          .getPublicUrl(fileName);

        imageUrl = publicUrlData.publicUrl;
      }

      const { error } = await supabase.from("reports").insert([
        {
          title: formData.title,
          description: formData.description,
          category: formData.category,
          location: formData.location,
          image_url: imageUrl,
        },
      ]);

      if (error) throw error;

      setMessage("Report submitted successfully!");
      setFormData({
        title: "",
        description: "",
        category: "",
        location: "",
        imageFile: null,
      });
    } catch (err) {
      console.error("Error:", err.message);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded mx-auto"
      style={{ maxWidth: "500px" }}
    >
      <h2 className="h4 mb-3 text-black">Report a Scam </h2>

      <div className="mb-3">
        <label htmlFor="title" className="form-label text-black">
        Scam/ Company Name
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Scam/ Company Name"
          value={formData.title}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label text-black">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Describe what happened..."
          value={formData.description}
          onChange={handleChange}
          className="form-control"
          rows={4}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label text-black">
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="e.g. Phishing, Investment scam"
          value={formData.category}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="location" className="form-label text-black">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="City"
          value={formData.location}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="imageFile" className="form-label text-black">
          Upload Image (optional)
        </label>
        <input
          type="file"
          id="imageFile"
          name="imageFile"
          accept="image/*"
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary w-100"
      >
        {loading ? "Submitting..." : "Submit Report"}
      </button>

      {message && (
        <div className="alert alert-success mt-3 text-center">{message}</div>
      )}
    </form>
  );
}
