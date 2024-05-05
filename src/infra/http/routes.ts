import { Router } from 'express'
import { expressAdapter } from '../adapters/tools/http/express.adapter'
import { makeHealthcheckController } from '../factories/controllers/healthcheck-controller.factory'
import { makeProcessPaymentController } from '../factories/controllers/process-payment-controller.factory'
import { makeQrCodePaymentController } from '../factories/controllers/qrcode-payment-controller.factory'
import { makeLivenessProbeController } from '../factories/controllers/liveness-controller.factory'
import { makeReadinessProbeController } from '../factories/controllers/readiness-controller.factory'

const router = Router()

router.get('/healthcheck', expressAdapter(makeHealthcheckController()))
router.get('/livenessProbe', expressAdapter(makeLivenessProbeController()))
router.get('/readinessProbe', expressAdapter(makeReadinessProbeController()))

// Orders
router.post('/orders/:orderNumber/pay', expressAdapter(makeProcessPaymentController()))

// Webhooks
router.post('/webhooks/paid_market/qrcodepayment', expressAdapter(makeQrCodePaymentController()))

export { router }
