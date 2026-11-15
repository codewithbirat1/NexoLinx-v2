export type BlogArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  points?: { title: string; description: string }[];
  table?: {
    headers: [string, string];
    rows: { first: string; second: string }[];
  };
  callout?: { title: string; text: string };
};

export type BlogArticleContent = {
  introduction: string;
  sections: BlogArticleSection[];
};

export const blogArticleContent: Record<string, BlogArticleContent | undefined> = {
  'designing-ai-products-people-can-actually-trust': {
    introduction:
      "People learn an AI feature through the work it helps them finish. When every product opens with a blank prompt and a generic response, that work disappears. Trust grows when the experience reflects the user's context, shows its limits, and leaves room to decide.",
    sections: [
      {
        id: 'why-ai-products-feel-alike',
        title: 'Why AI products can start to feel alike',
        paragraphs: [
          'A prompt field is a familiar starting point. It can help someone try a capability quickly, but it does not explain why that capability belongs in this product or how it supports the task already on screen.',
          'The experience feels interchangeable when it ignores the surrounding workflow: the information the product already knows, the decision the person needs to make, and what should happen after an answer arrives.',
        ],
        points: [
          {
            title: 'Context is missing',
            description:
              'People have to repeat details the product already has or guess what information the assistant can use.',
          },
          {
            title: 'The result has no next step',
            description:
              "A response appears, but its relationship to the task and the user's next decision is unclear.",
          },
          {
            title: 'Recovery is an afterthought',
            description:
              'When an answer is off target, the interface offers no clear way to refine it or return to the original work.',
          },
        ],
      },
      {
        id: 'start-with-the-task',
        title: 'Start with the task, not the model',
        paragraphs: [
          'Before designing an assistant or choosing a model, map one real task from its starting point to its outcome. Notice what the user already knows, what the product can safely contribute, and where a person needs to make the call.',
          'That map gives the feature a useful shape. Instead of asking people to invent a prompt, the interface can offer help at the moment it matters and make the result easy to evaluate.',
        ],
        table: {
          headers: ['Product moment', 'A useful design move'],
          rows: [
            {
              first: 'Starting a task',
              second:
                'Offer help in the context of the current record, draft, or workflow.',
            },
            {
              first: 'Reviewing a result',
              second:
                "Make the result's scope and relevant source information easy to inspect.",
            },
            {
              first: 'Taking action',
              second:
                'Let people review and adjust a suggestion before it changes their work.',
            },
          ],
        },
      },
      {
        id: 'make-behavior-legible',
        title: "Make the product's behavior legible",
        paragraphs: [
          'Trust is not a badge placed beside an AI feature. It comes from small, consistent cues that help a person understand what the product is doing and what it cannot confidently do.',
          'Use plain language to explain what information is being used. Keep suggestions distinct from confirmed facts, and give uncertainty an honest, useful explanation rather than dressing it up as certainty.',
        ],
        callout: {
          title: 'A practical principle',
          text:
            'The interface should make it easier to question, check, and shape an AI result, rather than making it harder to understand how it was produced.',
        },
      },
      {
        id: 'design-for-correction',
        title: 'Design correction into the experience',
        paragraphs: [
          'No single response will fit every situation. A thoughtful product makes refinement part of the normal workflow instead of treating it as an error state.',
          'Let people adjust the input, clarify what they meant, compare a suggestion with their original material, or leave the AI-assisted path without losing their progress. These choices keep the person in control while still making the capability useful.',
        ],
        points: [
          {
            title: 'Make edits direct',
            description:
              'Allow people to change the parts of a result they understand rather than restarting the whole task.',
          },
          {
            title: 'Keep the original close',
            description:
              'Preserve the source material so a suggestion can be checked in context.',
          },
          {
            title: 'Offer a clear way out',
            description:
              'Make it possible to dismiss a suggestion and continue with the familiar workflow.',
          },
        ],
      },
      {
        id: 'review-the-experience',
        title: 'A short review for your next AI feature',
        paragraphs: [
          'Review the complete experience, not just the generated output. The questions below help uncover whether the feature belongs to the product and gives people enough control to use it thoughtfully.',
        ],
        table: {
          headers: ['Ask during review', 'Look for'],
          rows: [
            {
              first: 'Is the feature grounded in a real task?',
              second:
                "A clear connection to the user's current goal and product context.",
            },
            {
              first: 'Can the user evaluate the result?',
              second:
                'Readable output, visible boundaries, and useful source context.',
            },
            {
              first: 'Can the user correct or decline it?',
              second:
                'A straightforward path to edit, retry, dismiss, or continue manually.',
            },
            {
              first: 'Does the feature feel native to this product?',
              second:
                'Language, controls, and next steps that fit the existing workflow.',
            },
          ],
        },
      },
      {
        id: 'make-it-feel-like-your-product',
        title: 'Make it feel like your product',
        paragraphs: [
          'Distinctive AI experiences do not need unfamiliar controls or elaborate effects. They need a clear point of view about the work, the people doing it, and the role the technology should play.',
          'Start with one task, design its boundaries as carefully as its capabilities, and test whether people can understand and shape the result. That is how an AI feature becomes a considered part of a product rather than another prompt box.',
        ],
      },
    ],
  },
};
