import { range } from 'lodash'

// for generate title
// up to 95 titles
const placeholder =
  'Dapibus euismod conubia lorem aliquet vivamus dictum. Proin convallis leo et vehicula pretium suspendisse. Sodales fringilla hymenaeos pellentesque, sagittis est cubilia porttitor eleifend conubia quam inceptos gravida. Praesent posuere pellentesque nec mauris aenean ac vel quam. Ut inceptos. Ipsum vivamus et quisque mus massa tempus vel magna vestibulum donec lacus odio pharetra porttitor massa phasellus. Cubilia malesuada. Porttitor Nec lacus rutrum ad tempus. Aliquam dapibus feugiat vivamus habitasse vestibulum consectetuer id. Penatibus consectetuer. Commodo torquent praesent justo neque vehicula felis, dui turpis nunc leo ut Tellus curabitur porttitor Etiam. Arcu dictum ac suspendisse parturient. Odio potenti. Ornare, consectetuer pede curae; cubilia quam nec. Diam Ultrices tempus. Eget Varius tempus auctor Ultrices gravida convallis suspendisse inceptos eu quis aenean inceptos varius, ullamcorper tristique litora eros ad, ac. In phasellus phasellus vel ad potenti pulvinar nec nisl, tempor leo penatibus dolor inceptos in sodales scelerisque taciti litora Sapien vulputate, tellus netus porttitor hendrerit. Praesent netus lobortis. Placerat natoque nec odio vestibulum ligula et morbi mauris orci conubia gravida massa felis donec scelerisque enim Habitasse aliquam auctor eu massa torquent laoreet. Est egestas. Placerat cum. Tortor morbi est ultricies. Auctor nostra iaculis nam arcu id per id egestas gravida hendrerit porta integer et senectus consectetuer amet amet magna eros varius consequat est tincidunt. Mattis condimentum gravida volutpat torquent luctus. Nisl. Neque pulvinar ultricies nisl vel elementum justo ullamcorper tellus pharetra pellentesque accumsan enim. Lacus pede potenti et orci enim lacinia in natoque volutpat nunc mollis. Proin lacus porta ligula sem feugiat consequat. Litora cras. Imperdiet volutpat porttitor quis nam. Quis habitasse praesent. Nascetur nostra ultrices metus mus id mus dolor nec. Tempor turpis amet rhoncus parturient aptent quisque porta vehicula ut netus facilisis habitasse nunc augue nam vivamus parturient risus porttitor ultrices ridiculus nonummy amet pharetra massa facilisi maecenas dis phasellus, tincidunt taciti rhoncus viverra hymenaeos viverra cum, hendrerit natoque ornare molestie rhoncus, ac montes tortor diam potenti nisi fermentum natoque turpis lacinia primis duis pretium feugiat laoreet cursus cras ullamcorper gravida orci potenti dignissim leo felis purus scelerisque litora consectetuer. Faucibus habitant ligula semper inceptos vitae lobortis diam cursus primis parturient a augue massa. Amet elementum mollis potenti feugiat accumsan cubilia mattis quisque tellus blandit ultrices. Litora. Sociis bibendum non metus, praesent ridiculus tortor sem nostra. Vestibulum pulvinar justo posuere sit parturient tellus fermentum tempus placerat ultricies aptent arcu dolor suscipit gravida aptent nisi ad erat. Cubilia non dui fames id eu facilisis iaculis sociosqu massa morbi, conubia sociis blandit enim bibendum sit pulvinar conubia potenti. Porttitor nascetur dapibus, porttitor, aliquet, laoreet magnis erat suspendisse per sed neque augue sapien gravida quis fringilla arcu aliquam tincidunt leo euismod montes dis. Purus bibendum id mattis nulla, facilisis consequat natoque tincidunt consequat mauris, sollicitudin massa gravida netus nibh id, viverra enim malesuada nisi varius varius, aliquet sodales id duis class netus. Ultrices Dolor ullamcorper, nunc fermentum. Dictumst non. Ornare cras blandit fringilla quam. Feugiat, proin ridiculus sit viverra. Senectus porttitor Eget massa. Commodo class. Natoque, luctus iaculis. Netus diam integer faucibus Laoreet porttitor felis ullamcorper porta arcu viverra et dictum nunc dui eu luctus nam volutpat nec libero nulla. Vestibulum Tellus porttitor. Sodales. Sodales ligula augue proin netus bibendum, praesent senectus blandit. Euismod pretium tortor elementum consequat imperdiet hac penatibus eget. Lacinia elit augue gravida arcu rhoncus nonummy massa litora nam cum accumsan mollis cubilia purus interdum platea fermentum tempus est quam pulvinar in augue ridiculus. Amet vestibulum dignissim aptent Malesuada per ante risus eu Parturient euismod lectus potenti ipsum torquent bibendum sapien ullamcorper est nibh vehicula accumsan ligula neque, sociis in bibendum porta morbi egestas diam potenti ut est vulputate dictum maecenas potenti fames aliquet ornare elit arcu. Laoreet risus, odio litora erat leo rhoncus primis venenatis hac nonummy aptent varius donec. Consectetuer donec. Fringilla eros netus netus porttitor primis viverra a. Dis sed mus. Enim dui iaculis fermentum eget Nisl dolor tellus rhoncus mollis nunc velit diam amet gravida. Feugiat phasellus accumsan cum porta interdum. Ullamcorper ad sociis sociosqu leo molestie justo nam diam purus augue tempor netus scelerisque fringilla purus orci rhoncus massa nibh urna natoque sagittis neque lorem ornare tempor eleifend scelerisque, accumsan id metus. Neque nam eget tempor, donec pulvinar commodo etiam urna congue morbi proin libero mollis tempor nulla lectus felis iaculis fusce. Rutrum felis interdum potenti nonummy dictum. Bibendum. Maecenas, facilisi diam hac ad litora elit montes eleifend id morbi feugiat curae; nulla porta pellentesque dignissim tellus at. Tempor dignissim condimentum. Urna leo iaculis. Auctor mi nec nonummy malesuada nunc. Elementum mi sodales turpis nisl facilisi vivamus sociosqu. Molestie pharetra lorem Tellus curae; ornare sodales at ipsum auctor morbi nisl augue nisi phasellus sapien. Nulla ut sagittis orci nunc hendrerit nec nunc ad lobortis mi. Quam nulla hac dui mi tristique quam quam. Hac class leo lacus diam torquent nam nulla nascetur duis. Ac natoque amet semper suspendisse. Enim sed ipsum ullamcorper congue auctor magnis velit hendrerit platea duis pellentesque vulputate interdum cum erat platea sem interdum netus posuere posuere. Facilisi venenatis litora taciti ut. Montes turpis. Id morbi nec netus platea integer class senectus ornare dolor tempor fringilla aenean ante vehicula senectus vivamus eleifend enim nonummy magnis elementum potenti torquent ridiculus ullamcorper aliquet gravida habitasse non pellentesque sit sollicitudin, dapibus aenean fringilla dictumst. Platea laoreet. Nisl suspendisse dolor mollis adipiscing maecenas fames tortor pharetra est dapibus Feugiat viverra ad metus eleifend hac commodo. Purus gravida litora fermentum proin porttitor litora nulla. Elementum dapibus vehicula. Feugiat cum accumsan ullamcorper, egestas. Ad elementum mus nisi vivamus congue, quam ullamcorper diam pellentesque porttitor. Nam interdum Tristique. Cubilia netus platea aptent iaculis, a id tempor congue magna sem litora habitant Lectus sapien sociosqu aptent convallis justo. Sed nostra phasellus sem tristique. Erat mattis feugiat suspendisse ante pharetra dictum per proin parturient nascetur facilisis praesent turpis malesuada, luctus hendrerit cubilia senectus purus integer turpis fusce nisl. Fames ut fringilla. Vel ipsum. Massa. Metus pharetra habitasse odio erat duis. Libero phasellus netus maecenas nam metus.'
const titles = placeholder.split('.')
// DON'T OUTNUMBER 95
const number = 15
// Common use
const body = `
  # This is a Test Title

  And this is a test sentence.

  ## For something here as a 2nd titile

  More text here for test.

  Sodales fringilla hymenaeos pellentesque, sagittis est cubilia porttitor eleifend conubia quam inceptos gravida.

  Commodo torquent praesent justo neque vehicula felis, dui turpis nunc leo ut Tellus curabitur porttitor Etiam.

  Aliquam dapibus feugiat vivamus habitasse vestibulum consectetuer id.

  Test something like \`this\`, *this*, and **this**.

  \`\`\`js
  const text = 'Hellow World.'
  console.log(text)
  throw new Error('the end')
  \`\`\`

  A fake todo list.

  - [x] reading
  - [x] eating
  - [ ] playing

  Even a table.

  Table | Just | For | Test
  ----- | ---- | --- | ----
  1 | 2 | 3 | 4
  A | B | C | D
  one | two | three | four

  Some quotes.

  > Life is just hight low low low low and low.
  > By me.

  Okay, the end.

`

const baseTimestamp = 1543758085849

const list = range(number).map(i => {
  return {
    title: titles[i],
    createdTimestamp: baseTimestamp - 864000000 * (i + 1),
    tags: `post${i % 2 == 0 ? ',test' : ''}${i % 3 == 0 ? ',end' : ''}`.split(
      ','
    ),
    body: body,
  }
})

// data for development
export default {
  list: list,
  title: 'Richard Zg',
}
