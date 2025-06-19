import { useState } from 'react';

interface CommentFormProps {
  logId: string;
  onCommentAdded: () => void;
}

export default function CommentForm({ logId, onCommentAdded }: CommentFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ logId, text }),
    });
    setText('');
    onCommentAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 border w-full"
        placeholder="Add a comment"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">Comment</button>
    </form>
  );
}