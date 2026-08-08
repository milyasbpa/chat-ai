'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/core/components/dialog/dialog';
import { Input } from '@/core/components/input/input';
import { Button } from '@/core/components/button/button';
import { Link } from '@/core/components/link/link';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/core/components/accordion/accordion';
import { ArrowUpRight } from 'lucide-react';

interface ApiKeyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ApiKeyModal({ open, onOpenChange }: ApiKeyModalProps) {
  const [apiKey, setApiKey] = React.useState('');

  const faqs = [
    {
      question: 'API key not working?',
      answer:
        'Ensure the API key is correctly copied and pasted without any extra spaces. Check that the API key has not expired or been revoked. Verify that you have the correct permissions and quota for the API usage. If issues persist, consult the OpenAI API documentation or contact OpenAI support.',
    },
    {
      question: 'How is the API key handled?',
      answer:
        'The API key is stored locally in your browser and never sent or stored anywhere else. It is used solely to authenticate your requests to the OpenAI API, ensuring secure and authorized access.',
    },
    {
      question: 'Do I need ChatGPT Plus to get an API key?',
      answer:
        'No, you do not need a ChatGPT Plus subscription to use the OpenAI API key. The API key is available for use with any OpenAI account, regardless of the subscription tier.',
    },
    {
      question: 'Do I need to pay for an API key from Open AI?',
      answer:
        "Yes, using the OpenAI API typically involves usage-based billing. You will be billed based on the number of requests and the computational resources used, according to OpenAI's pricing plan.",
    },
    {
      question: 'License key vs. API key',
      answer:
        'An API key is used to authenticate and authorize access to the OpenAI API, allowing you to make API requests. A license key generally refers to a product license for software usage, which may or may not include API access. For OpenAI services, the API key is the primary means of accessing and utilizing their API features.',
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-32px)] max-w-[480px] overflow-hidden rounded-[12px] border-neutral-200 p-0 sm:w-full">
        {/* Scrollable Container */}
        <div className="max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-6 p-6">
            <DialogHeader className="gap-1 text-center sm:text-center">
              <DialogTitle className="text-[20px] leading-[28px] font-semibold text-neutral-900">
                Enter Your OpenAI API Key:
              </DialogTitle>
              <DialogDescription className="text-[14px] leading-[20px] font-normal text-neutral-500">
                You need an OpenAI API Key to use this app. Your API Key will be
                stored locally on your browser.
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-2">
              <Input
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              />
              <a
                href="https://platform.openai.com/api-keys"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 self-start text-[14px] leading-[20px] font-medium text-indigo-600 hover:underline"
              >
                <ArrowUpRight className="h-4 w-4" />
                Go to Open AI to get your API key
              </a>
            </div>

            <DialogFooter className="flex-row justify-center gap-3 sm:justify-center">
              <Button
                variant="secondary"
                className="flex-1"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button className="flex-1" onClick={() => onOpenChange(false)}>
                Save
              </Button>
            </DialogFooter>

            <div className="flex flex-col gap-4 pt-2">
              <h3 className="text-[18px] leading-[28px] font-semibold text-neutral-900">
                FAQs
              </h3>
              <Accordion type="multiple" className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-[14px] leading-[20px]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[14px] leading-[20px]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
