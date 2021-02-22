import { default as z } from 'zod'

export default function (adapter) {
  const schema = z.object({
    echo: z.function()
      .args(z.string())
      .returns(
        z.promise(
          z.string()
        )
      )
  })

  let instance = schema.parse(adapter)
  instance.echo = schema.shape.echo.validate(instance.echo)
  return instance
}

