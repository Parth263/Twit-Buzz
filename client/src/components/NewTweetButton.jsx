import React from 'react'
import Plus from "/src/assets/plus-content-add.svg"

function NewTweetButton() {
  return (
    <div>
      <button>
        <img src={Plus} alt="Newtweet" className='h-8 w-8 rounded-full' />
      </button>
    </div>
  )
}

export default NewTweetButton
