import { useParams } from 'react-router-dom'
import { blogs } from '../data'
import { formatPostingTime } from '../utils/helperFunctions'

export default function BlogPost() {
  const { id } = useParams()
  const post = blogs.find(post => post.id === Number(id))

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="h-[30rem] w-full rounded-lg object-cover"
        />
      </div>
      <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
      <h2 className="mb-6 text-xl font-semibold">{post.subtitle}</h2>
      <div className="mb-8 text-justify text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo atque
        esse, aut inventore repellendus quasi debitis beatae dolorem! Voluptas
        quibusdam vitae nesciunt commodi pariatur, eos debitis eum repellat
        iusto qui ipsum quam quidem aliquam natus voluptates necessitatibus.
        Laudantium, blanditiis saepe facere consectetur voluptas sequi fuga
        tenetur recusandae aspernatur culpa vel amet, deleniti inventore, quam
        rem dignissimos labore laborum! Ab rerum ipsa porro! Eaque, odit,
        ducimus earum consequuntur voluptatum voluptate vero possimus, expedita
        quo sunt exercitationem alias eius? Nihil, id? Molestias consequatur,
        mollitia repellendus, consequuntur, neque odio possimus maxime
        praesentium illum reiciendis doloribus incidunt deleniti minus nihil
        magni laborum! Exercitationem illo, facilis quos ad nostrum earum
        suscipit dignissimos, temporibus optio mollitia veritatis cupiditate a
        iusto et sapiente, laborum dolorum magni? Quibusdam excepturi
        praesentium at magni architecto impedit quasi ullam soluta tenetur ipsum
        facere officia deleniti eum magnam molestias, voluptas dicta, unde nemo
        aliquam dignissimos fugit neque obcaecati delectus tempore? Delectus,
        vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        voluptatibus explicabo aut at autem. Consequatur quibusdam voluptatum
        in, id perferendis maxime voluptate voluptates velit, veniam dolorum
        labore beatae ducimus odit nam. Earum, officia? Nemo id impedit alias,
        fugit atque deleniti, veritatis dignissimos repellendus, ab perferendis
        ex harum culpa? Accusantium veritatis optio dicta quaerat vel, tenetur
        cum, ex similique iste porro laboriosam aut, dolorem ipsam harum
        temporibus totam quo nesciunt ullam repellendus veniam officiis!
        Eligendi ipsum nisi hic, quaerat, error, vel id magni enim facere a eius
        expedita? Eius dicta tempore laboriosam illo, odio atque magni non
        magnam architecto perferendis amet consequatur ut hic distinctio maxime
        eum molestias ratione assumenda a cumque nesciunt repellat labore iusto
        placeat? Cupiditate provident soluta eum ea qui officia tenetur amet
        accusantium saepe dolore, accusamus, est neque vitae rem? Incidunt quae
        omnis ea, eaque sequi atque.
      </div>
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div className="flex items-center">
          <img
            src={post.authorPhoto}
            alt={post.authorName}
            className="mr-4 h-12 w-12 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-gray-700">{post.authorName}</div>
            <div className="text-gray-600">
              {formatPostingTime(post.postingTime)}
            </div>
          </div>
        </div>
        <div className="flex">
          <button className="mr-4 rounded bg-violet-500 px-4 py-2 font-bold text-white hover:bg-violet-700">
            <i className="fa-solid fa-share-nodes"></i>
          </button>
          <button className="rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400">
            <i className="fa-regular fa-bookmark"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
