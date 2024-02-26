import type { StoryObj } from '@storybook/react'
import { Misty, MistyBody, MistyClose, MistyDescription } from './Misty'

const meta = {
  title: 'UI/Misty',
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  render: () => (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Misty
          width="100%"
          height="200px"
          preLoad={false}
          contents={
            <div>
              <div>'hi'</div>
              <div>'hi'</div>
              <div>'hi'</div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis incidunt perferendis cum eius sint
              error et saepe ut, ad at reiciendis quibusdam praesentium iusto quae voluptatibus excepturi vero?
              Possimus, vero. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, reiciendis
              maxime. Nisi eum cumque tempore obcaecati. Debitis, dolorum doloremque nihil, incidunt, laudantium aliquam
              ab corrupti pariatur fuga sequi nulla veniam! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cum voluptatum qui iure labore odio laborum vero eum, facilis laboriosam culpa. Voluptates numquam atque
              magni culpa beatae laborum eum rerum impedit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis incidunt perferendis cum eius sint error et saepe ut, ad at reiciendis quibusdam praesentium
              iusto quae voluptatibus excepturi vero? Possimus, vero. Quisquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Omnis, reiciendis maxime. Nisi eum cumque tempore obcaecati. Debitis, dolorum doloremque
              nihil, incidunt, laudantium aliquam ab corrupti pariatur fuga sequi nulla veniam! Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Cum voluptatum qui iure labore odio laborum vero eum, facilis
              laboriosam culpa. Voluptates numquam atque magni culpa beatae laborum eum rerum impedit. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Perspiciatis incidunt perferendis cum eius sint error et saepe ut,
              ad at reiciendis quibusdam praesentium iusto quae voluptatibus excepturi vero? Possimus, vero. Quisquam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, reiciendis maxime. Nisi eum cumque tempore
              obcaecati. Debitis, dolorum doloremque nihil, incidunt, laudantium aliquam ab corrupti pariatur fuga sequi
              nulla veniam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum voluptatum qui iure labore
              odio laborum vero eum, facilis laboriosam culpa. Voluptates numquam atque magni culpa beatae laborum eum
              rerum impedit.
            </div>
          }
        >
          <MistyBody
            style={{
              background: `linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
          linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
          linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)`,
            }}
          >
            <MistyClose />
            <MistyDescription>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum adipisci expedita iusto nemo earum
              accusantium sint laborum ratione dicta rem vitae praesentium sapiente nam saepe ipsum magnam, eos et
              voluptatem?
            </MistyDescription>
          </MistyBody>
        </Misty>
      </div>
      <Misty
        preLoad={true}
        contents={
          <div>
            <div>'hi'</div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum adipisci expedita iusto nemo earum
              accusantium sint laborum ratione dicta rem vitae praesentium sapiente nam saepe ipsum magnam, eos et
              voluptatem?
            </div>
            <div>'hi'</div>
            <div>'hi'</div>
            <div>'hi'</div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum adipisci expedita iusto nemo earum
              accusantium sint laborum ratione dicta rem vitae praesentium sapiente nam saepe ipsum magnam, eos et
              voluptatem?
            </div>
            <div>'hi'</div>
            <div>'hi'</div>
            <div>'hi'</div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum adipisci expedita iusto nemo earum
              accusantium sint laborum ratione dicta rem vitae praesentium sapiente nam saepe ipsum magnam, eos et
              voluptatem?
            </div>
            <div>'hi'</div>
            <div>'hi'</div>
            <div>'hi'</div>
          </div>
        }
      >
        <MistyBody>
          <MistyClose />
          <MistyDescription style={{ filter: 'blur(2px)' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum adipisci expedita iusto nemo earum
            accusantium sint laborum ratione dicta rem vitae praesentium sapiente nam saepe ipsum magnam, eos et
            voluptatem?
          </MistyDescription>
        </MistyBody>
      </Misty>
      <Misty
        preLoad={false}
        contents={
          <div>
            <div>'hi'</div>
            <div>'hi'</div>
            <div>'hi'</div> <div>'hi'</div>
            <div>'hi'</div>
            <div>'hi'</div> <div>'hi'</div>
            <div>'hi'</div>
            <div>'hi'</div> <div>'hi'</div>
            <div>'hi'</div>
            <div>'hi'</div>
          </div>
        }
      >
        <MistyBody>
          <MistyDescription
            style={{
              background: `linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
          linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
          linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)`,
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum adipisci expedita iusto nemo earum
            accusantium sint laborum ratione dicta rem vitae praesentium sapiente nam saepe ipsum magnam, eos et
            voluptatem?
          </MistyDescription>
          <MistyClose />
        </MistyBody>
      </Misty>
    </>
  ),
}
