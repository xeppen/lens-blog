import { useForm } from "react-hook-form";
import { useLensContext } from "../context/LensContext";

function PostForm() {
  const { profileId, token } = useLensContext();

  const { register, handleSubmit, watch, errors, reset, formState } = useForm({
    mode: "onChange",
  });

  const publishPost = async (data) => {
    return null;
  };

  return (
    <form onSubmit={handleSubmit(publishPost)}>
      <input
        placeholder="Post Title"
        name="contentName"
        {...register("contentName", {
          maxLength: 100,
          minLength: 1,
          required: true,
        })}
      />
      <textarea
        className="h-96 mb-2 "
        placeholder="Write your article here!"
        name="content"
        {...register("content", {
          maxLength: 25000,
          minLength: 10,
          required: true,
        })}
      />
      <input
        className="mb-2 border border-gray-300 "
        placeholder="(optional) Image URI"
        name="imageURI"
        {...register("imageURI", {
          maxLength: 100,
          minLength: 1,
          required: false,
        })}
      />
      <input
        className="mb-2 border border-gray-300 "
        placeholder="(optional) image/svg+xml,image/gif,image/jpeg,image/png,image/tiff..."
        name="imageType"
        {...register("imageType", {
          maxLength: 100,
          minLength: 1,
          required: false,
        })}
      />
      <input
        className="mb-2 border border-gray-300 "
        placeholder="(optional) Pinata API Key"
        name="pinataApiKey"
        {...register("pinataApiKey", {
          maxLength: 100,
          minLength: 1,
          required: false,
        })}
      />
      <input
        className="mb-2 border border-gray-300 "
        placeholder="(optional) Pinata API Secret"
        name="pinataApiSecret"
        {...register("pinataApiSecret", {
          maxLength: 100,
          minLength: 1,
          required: false,
        })}
      />
      {errors ? (
        <p className="text-danger">{errors.content?.message}</p>
      ) : (
        <div></div>
      )}
      {profileId && token ? (
        <button
          type="submit"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          disabled={!isDirty || !isValid}
        >
          Publish
        </button>
      ) : (
        <div>
          You need a lens profile to submit!{" "}
          <a
            href="https://claim.lens.xyz/"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Claim here!
          </a>
          <br />
          (Or you need to sign in)
        </div>
      )}
    </form>
  );
}

export default function WritePost() {
  return (
    <div>
      <h1>Write Post</h1>
      <PostForm />
    </div>
  );
}
