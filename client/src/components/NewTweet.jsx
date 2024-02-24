import Avatar from "./Avatar";

function NewTweet() {
  return (
    <div className="flex w-full items-center justify-center gap-3 px-4 py-2">
      
      <Avatar />
     
      <textarea
        name
        id
        cols={30}
        rows={10}
        placeholder="What's happening?"
        className="font-regular w-full resize-none bg-transparent text-base leading-normal text-neutral-50 placeholder:text-neutral-600 focus:outline-none"
        defaultValue={""}
      />
      
    </div>
  );
}

export default NewTweet;
