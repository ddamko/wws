import { component$ } from '@builder.io/qwik';

export default component$((props: { text: string }) => {
    return (
      <div class="text-left text-white bg-slate-800">
        {props.text}
      </div>
    );
  });
  