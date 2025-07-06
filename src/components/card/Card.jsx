import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Supabase client (moved outside for optimization)
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Card = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  // For image modal
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: fetchedData, error } = await supabase
          .from("reports")
          .select("*");
        if (error) throw error;
        setData(fetchedData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  const openImageModal = (url) => {
    setSelectedImage(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  if (loading) return <div className="text-center my-5">Loading...</div>;
  if (error)
    return <div className="alert alert-danger">Error: {error.message}</div>;

  return (
    <div className="container my-4">
      <div className="row">
        {data.length === 0 ? (
          <p className="text-center">No reports found.</p>
        ) : (
          data.map((item) => (
            <div className="col-md-4 mb-4 " key={item.id}>
              
              <div className="card h-100 shadow-sm"  style={{ backgroundColor: "var(--muted)", color: "var(--text)" }}>
                <img
                  className="card-img-top"
                  src={
                    item.image_url ||
                    "https://placehold.co/300x180?text=No+Image"
                  }
                  alt={item.title}
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => openImageModal(item.image_url)}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    {expandedId === item.id
                      ? item.description
                      : `${item.description.slice(0, 100)}...`}
                    {item.description.length > 100 && (
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="btn btn-link p-0 ms-1"
                      >
                        {expandedId === item.id ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </p>
                </div>
                <div className="card-footer border-top-0" style={{ backgroundColor: "var(--muted)"}}>
                  <span className="badge"  style={{ backgroundColor: "var(--text)", color: "var(--background)" }}>{item.category}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Image Modal */}
      {showModal && selectedImage && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          onClick={closeModal}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Full Image</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={selectedImage}
                  alt="Full"
                  className="img-fluid rounded"
                  style={{ maxHeight: "80vh", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
