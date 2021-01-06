import { Topic } from './interfaces/topic';

export const topics: Topic[] = [
  {
    id: 1,
    title: 'My first topic in this forum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis, magna quis ultricies efficitur, metus orci pulvinar metus, in dapibus magna odio vel sapien. Sed auctor ligula porttitor neque tincidunt, id tristique nisi viverra. Aenean a tortor eget eros sodales malesuada. Praesent ornare, sem eget tempor fermentum, nisi lorem maximus erat, nec interdum quam lectus ut mauris. Praesent in justo leo. Integer eu sem eros. ',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis, magna quis ultricies efficitur, metus orci pulvinar metus, in dapibus magna odio vel sapien. Sed auctor ligula porttitor neque tincidunt, id tristique nisi viverra. Aenean a tortor eget eros sodales malesuada. Praesent ornare, sem eget tempor fermentum, nisi lorem maximus erat, nec interdum quam lectus ut mauris. Praesent in justo leo. Integer eu sem eros. Mauris consequat mattis dolor. Donec fringilla mauris eget nisi scelerisque aliquam. In hac habitasse platea dictumst. Aliquam nisi nisi, eleifend vel est lobortis, blandit rhoncus lacus. Aliquam arcu nisl, bibendum vitae blandit ut, mattis ac quam. Nam posuere, odio a dignissim suscipit, mi ante rhoncus neque, sed mattis quam justo at sapien. Nullam a lorem condimentum, imperdiet lorem non, placerat nulla. ',
    comments: [
      {
        user: {
          id: 1,
          email: 'test@test.com',
          name: 'Test',
          password: 'test1',
        },
        title: 'Not that bad',
        content:
          "Well, that's quite nice. For me, this topic is really helpful",
      },
    ],
  },
  {
    id: 2,
    title: 'How to become developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis, magna quis ultricies efficitur, metus orci pulvinar metus, in dapibus magna odio vel sapien. Sed auctor ligula porttitor neque tincidunt, id tristique nisi viverra. Aenean a tortor eget eros sodales malesuada. Praesent ornare, sem eget tempor fermentum, nisi lorem maximus erat, nec interdum quam lectus ut mauris. Praesent in justo leo. Integer eu sem eros. ',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis, magna quis ultricies efficitur, metus orci pulvinar metus, in dapibus magna odio vel sapien. Sed auctor ligula porttitor neque tincidunt, id tristique nisi viverra. Aenean a tortor eget eros sodales malesuada. Praesent ornare, sem eget tempor fermentum, nisi lorem maximus erat, nec interdum quam lectus ut mauris. Praesent in justo leo. Integer eu sem eros. Mauris consequat mattis dolor. Donec fringilla mauris eget nisi scelerisque aliquam. In hac habitasse platea dictumst. Aliquam nisi nisi, eleifend vel est lobortis, blandit rhoncus lacus. Aliquam arcu nisl, bibendum vitae blandit ut, mattis ac quam. Nam posuere, odio a dignissim suscipit, mi ante rhoncus neque, sed mattis quam justo at sapien. Nullam a lorem condimentum, imperdiet lorem non, placerat nulla. ',
  },
  {
    id: 3,
    title: 'How to stay a good man',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis, magna quis ultricies efficitur, metus orci pulvinar metus, in dapibus magna odio vel sapien. Sed auctor ligula porttitor neque tincidunt, id tristique nisi viverra. Aenean a tortor eget eros sodales malesuada. Praesent ornare, sem eget tempor fermentum, nisi lorem maximus erat, nec interdum quam lectus ut mauris. Praesent in justo leo. Integer eu sem eros. ',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis, magna quis ultricies efficitur, metus orci pulvinar metus, in dapibus magna odio vel sapien. Sed auctor ligula porttitor neque tincidunt, id tristique nisi viverra. Aenean a tortor eget eros sodales malesuada. Praesent ornare, sem eget tempor fermentum, nisi lorem maximus erat, nec interdum quam lectus ut mauris. Praesent in justo leo. Integer eu sem eros. Mauris consequat mattis dolor. Donec fringilla mauris eget nisi scelerisque aliquam. In hac habitasse platea dictumst. Aliquam nisi nisi, eleifend vel est lobortis, blandit rhoncus lacus. Aliquam arcu nisl, bibendum vitae blandit ut, mattis ac quam. Nam posuere, odio a dignissim suscipit, mi ante rhoncus neque, sed mattis quam justo at sapien. Nullam a lorem condimentum, imperdiet lorem non, placerat nulla. ',
  },
  {
    id: 4,
    title: 'How to handle math?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis, magna quis ultricies efficitur, metus orci pulvinar metus, in dapibus magna odio vel sapien. Sed auctor ligula porttitor neque tincidunt, id tristique nisi viverra. Aenean a tortor eget eros sodales malesuada. Praesent ornare, sem eget tempor fermentum, nisi lorem maximus erat, nec interdum quam lectus ut mauris. Praesent in justo leo. Integer eu sem eros. ',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis, magna quis ultricies efficitur, metus orci pulvinar metus, in dapibus magna odio vel sapien. Sed auctor ligula porttitor neque tincidunt, id tristique nisi viverra. Aenean a tortor eget eros sodales malesuada. Praesent ornare, sem eget tempor fermentum, nisi lorem maximus erat, nec interdum quam lectus ut mauris. Praesent in justo leo. Integer eu sem eros. Mauris consequat mattis dolor. Donec fringilla mauris eget nisi scelerisque aliquam. In hac habitasse platea dictumst. Aliquam nisi nisi, eleifend vel est lobortis, blandit rhoncus lacus. Aliquam arcu nisl, bibendum vitae blandit ut, mattis ac quam. Nam posuere, odio a dignissim suscipit, mi ante rhoncus neque, sed mattis quam justo at sapien. Nullam a lorem condimentum, imperdiet lorem non, placerat nulla. ',
  },
];
