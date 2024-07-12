const image_hosting_key = import.meta.env.VITE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProducts = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const images = Array.from(form.image.files);

    const quantity = form.quantity.value;
    const sizeInput = form.size.value;
    const sizes = sizeInput.split(",").map((size: string) => size.trim());
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const brand = form.brand.value;
    const featured = form.featured.value;

    const imageUrls = await Promise.all(
      images.map(async (image) => {
        const formData = new FormData();
        formData.append("image", image);

        const response = await fetch(image_hosting_api, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Image upload failed");
        }

        const data = await response.json();
        return data.data.url;
      })
    );

    const product = {
      name,
      images: imageUrls,
      quantity,
      sizes,
      category,
      price,
      description,
      rating,
      brand,
      featured,
    };
    // mutation.mutate(newFood);
    console.log(product);

    // form.reset();
  };
  // if (mutation.isSuccess) {
  //   Swal.fire({
  //     position: "top-end",
  //     icon: "success",
  //     title: "product has been added",
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  // }
  return (
    <div className="pt-16 min-h-[100vh-64px]">
      <div className="hero min-h-[100vh-64px] pt-14   bg-base-200">
        <div className="card flex-shrink-0 mt-10 mb-10 w-full max-w-3xl shadow-2xl bg-base-100">
          <form
            className="card-body grid grid-cols-1 lg:grid-cols-2 gap-6 "
            onSubmit={handleFormSubmit}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                name="brand"
                placeholder="brand name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="quantity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Size</span>
              </label>
              <input
                type="text"
                name="size"
                placeholder="Size separete with comma"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="isFeatured">
                <span className="label-text">Featured</span>
              </label>
              <select name="featured" id="isFeatured">
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Images</span>
              </label>
              <input
                type="file"
                name="image"
                placeholder="file"
                className="input input-bordered"
                multiple
                required
              />
            </div>
            <div className="form-control mt-6 col-span-2">
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
            </div>
          </form>
          {/* {errMsg && <p className="text-red-500 text-center mb-3">{errMsg}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
