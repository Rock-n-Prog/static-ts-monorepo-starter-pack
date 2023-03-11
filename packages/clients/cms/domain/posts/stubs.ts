const stubPosts = [
  {
    slug: '1',
    title: 'My first post',
    content: `
    In dapibus sit amet velit ut egestas. Etiam nunc nulla, bibendum a pretium vitae, pellentesque in nibh. Nulla at laoreet lacus. Praesent lectus elit, maximus condimentum tellus a, consequat suscipit erat. Sed eleifend viverra orci sagittis scelerisque. Mauris feugiat augue arcu, sed pellentesque nunc hendrerit eget. Aenean lobortis dapibus condimentum. Praesent porttitor est quis placerat scelerisque. Ut consequat tincidunt nisl eget vestibulum. Mauris id ante faucibus, dignissim libero eget, congue nisl. Curabitur consequat justo ut magna mattis, et ultricies diam condimentum. Phasellus ac ipsum eget erat tempus vehicula. Sed interdum dui ex, sit amet ullamcorper urna ullamcorper pharetra. Aenean placerat accumsan lectus, sit amet tristique nisi egestas nec. Etiam massa eros, elementum eget quam malesuada, rhoncus tristique enim.

In quis nisl et enim cursus fringilla vel semper dolor. Etiam a massa libero. Etiam aliquet orci at sem convallis, vitae vehicula diam pharetra. Vestibulum vitae commodo mi. In at diam diam. Mauris ut pellentesque orci. Praesent hendrerit ut nisi ac cursus. Aliquam aliquam massa turpis. Ut congue eget lorem quis luctus. Nunc cursus risus non ex venenatis accumsan. Sed lacinia eros ante. Nam mollis porta lectus, sed aliquam dolor rhoncus eu. Duis lacus nisl, eleifend ac mi sagittis, luctus dignissim lorem. Pellentesque sed lacus at diam gravida porttitor. Donec at condimentum quam. Aenean augue purus, viverra fringilla sapien et, euismod malesuada odio.

Praesent tristique tincidunt elit quis elementum. Quisque condimentum mauris quis tempus consectetur. Ut accumsan consequat nisi, eget bibendum est dapibus in. Suspendisse finibus volutpat nisl. Suspendisse lacinia justo ac dui varius, non gravida justo rhoncus. Etiam arcu elit, suscipit sit amet nisl id, sagittis venenatis lacus. Etiam eget suscipit lectus, ut bibendum dui. Quisque orci nisl, luctus at pharetra quis, pretium auctor nulla. Nullam eget nisi elit. Ut interdum augue tellus, quis feugiat sem pellentesque eu. Cras congue quam nulla, id posuere dui malesuada sed. Nullam vitae nisl diam. Ut sagittis mauris id nisl dapibus convallis. Curabitur sed magna et sapien feugiat vulputate. Praesent vestibulum lacus purus, et cursus erat efficitur sed.
        `,
  },
  {
    slug: '2',
    title: 'My second post',
    content: `
In consectetur sodales aliquet. Duis dapibus arcu at odio bibendum, non dictum diam ultricies. Cras ultricies tincidunt lacus eu dapibus. Vivamus risus est, maximus non interdum sed, molestie in metus. Pellentesque feugiat eget quam eu iaculis. Duis euismod aliquam mi, sit amet porttitor velit efficitur et. In laoreet eget elit ut dignissim. Sed quis dui eu nisi faucibus venenatis vel at nibh. Nam lobortis tincidunt orci venenatis congue.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer blandit erat ante, in maximus dui vestibulum nec. Nullam pretium massa in efficitur efficitur. Suspendisse dapibus risus eu libero varius laoreet. Praesent semper, augue vitae suscipit euismod, massa arcu suscipit massa, ac tincidunt mi neque at arcu. Nullam tristique facilisis dui, cursus fermentum risus fermentum id. Fusce rutrum commodo nulla, ac congue lorem. Aenean ut iaculis sapien. Mauris ac lorem elementum, interdum eros aliquet, sagittis nisi. Mauris vulputate felis quis tempus feugiat. Quisque efficitur eros non nisl ullamcorper, quis sagittis libero lobortis. Sed tincidunt nisl eget justo mollis tristique.

Sed quis magna quam. Nam scelerisque tortor quis sapien tincidunt, non pellentesque lectus suscipit. Cras at neque dui. Sed magna magna, auctor in odio id, maximus rutrum sapien. Donec aliquam imperdiet nibh, sagittis dictum sem cursus eu. Morbi massa nisi, posuere vel consectetur ut, rutrum vel nisl. Pellentesque at metus eu neque lobortis dapibus sed id libero. Morbi pellentesque suscipit sapien non ultricies. Vivamus auctor turpis id ullamcorper hendrerit. Suspendisse cursus blandit iaculis. Nunc elementum eros volutpat risus rutrum, eleifend malesuada nisl viverra. Sed venenatis arcu vel arcu rutrum ultrices. Nullam in odio non nisi porttitor auctor.`,
  },
  {
    slug: '3',
    title: 'My third post',
    content: `
Nulla dapibus pellentesque luctus. Nulla euismod libero eget finibus fringilla. Duis id sem rutrum, imperdiet sem ac, ultrices quam. Nulla venenatis mi ac quam accumsan sollicitudin. Morbi convallis nibh ut vehicula aliquet. Nam elit tellus, euismod nec iaculis quis, ullamcorper efficitur justo. Maecenas vitae tempor metus. Nulla molestie ante id aliquet lobortis. Vivamus pulvinar, orci quis faucibus congue, felis tellus bibendum enim, eget convallis diam ex vitae eros. Curabitur mattis ultrices bibendum. Curabitur elementum diam nec tortor pellentesque luctus. Aliquam molestie, erat ac ultrices bibendum, lectus est malesuada erat, quis fermentum ante libero eu felis.

Suspendisse dictum pretium fringilla. Mauris magna nibh, ornare sed nulla lobortis, mollis sodales ligula. Phasellus at aliquet enim. Mauris neque risus, vehicula non ornare eu, condimentum eu eros. Quisque eget lorem quis justo ornare scelerisque at in nunc. Suspendisse bibendum hendrerit sagittis. Fusce viverra, dolor non convallis tempus, justo sapien pretium arcu, vel pharetra eros felis eget lectus. Phasellus rhoncus ornare laoreet. Nam sit amet aliquam tellus.

Donec lectus risus, ultrices ac vehicula ut, rutrum in sem. Pellentesque pellentesque, mi non suscipit dictum, erat quam condimentum lectus, sit amet congue tortor odio eu nunc. Donec felis justo, tristique ultricies porta a, lacinia in dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id gravida mauris, tristique ullamcorper sem. Sed gravida augue vitae felis euismod tincidunt. In non dolor imperdiet arcu gravida dapibus. Maecenas auctor, augue ut sagittis venenatis, diam purus volutpat ante, et sodales dui nunc eget urna. Nullam mollis nunc non pulvinar dictum. Ut fermentum at arcu eu sagittis. In eget quam est. Sed ante turpis, auctor eget nulla quis, tristique porttitor massa.        `,
  },
];

export { stubPosts };
