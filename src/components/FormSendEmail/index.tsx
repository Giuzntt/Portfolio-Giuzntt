import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { Button, TextInput, Textarea } from 'flowbite-react';
import SectionTitle from '../SectionTitle';
import { toast } from 'react-toastify';

interface IFormInput {
  email: string;
  message: string;
}

const FormSendEmail: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const [loading, setLoading] = React.useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL!;

     setLoading(true);
    try {
      // Enviar mensagem para o webhook do Discord
      await axios.post(
        webhookUrl,
        {
          content: `**Email:** ${data.email}\n**Mensagem:** ${data.message}`,
        }
        );      
      toast.success('Mensagem enviada com sucesso!',
        { autoClose: 5000 }
      );
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
      
      toast.error('Falha ao enviar a mensagem, tente novamente.',{
        autoClose: 5000
      });
    } finally{
      setLoading(false);
    }
  }

  return (
    <div className="w-full p-4">
      <SectionTitle title="Gostaria de entrar em contato?" />
      <p className="text-sm text-gray-600 mb-4 font-semibold">
        Preencha o formulário abaixo e entrarei em contato o mais rápido
        possível.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="py-4">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-gray-600 text-sm font-medium"
          >
            E-mail
          </label>
          <TextInput
            id="email"
            type="email"
            className="w-full"
            placeholder="Digite seu email"
            {...register('email', {
              required: 'O email é obrigatório.',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message: 'Insira um email válido.',
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Mensagem
          </label>
          <Textarea
            id="message"
            className="min-h-[100px]"
            placeholder="Digite sua mensagem"
            rows={4}
            {...register('message', { required: 'A mensagem é obrigatória.' })}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex items-end justify-end">
          <Button
            type="submit"
            loading={loading}
            className="bg-cornflower-blue text-white font-semibold
                w-[120px] h-[40px] rounded-md filter:hover brightness-90 transition duration-300 ease-in-out"
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormSendEmail;
