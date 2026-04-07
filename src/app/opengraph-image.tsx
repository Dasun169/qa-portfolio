import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Dasun Navindu - QA Engineer Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #0a0a2a 0%, #1a1a3a 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                {/* Decorative elements */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at 30% 50%, rgba(59,130,246,0.1) 0%, transparent 70%)',
                    }}
                />

                {/* Main content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            fontSize: 64,
                            fontWeight: 'bold',
                            marginBottom: 20,
                            background: 'linear-gradient(135deg, #fff 0%, #3b82f6 100%)',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        Dasun Navindu
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            color: '#3b82f6',
                            marginBottom: 15,
                        }}
                    >
                        Software Quality Assurance Engineer
                    </div>
                    <div
                        style={{
                            fontSize: 20,
                            color: '#94a3b8',
                            marginTop: 20,
                        }}
                    >
                        Test Automation | Manual Testing | Web Development
                    </div>
                    <div
                        style={{
                            fontSize: 16,
                            color: '#64748b',
                            marginTop: 40,
                        }}
                    >
                        dasunnavindu.dev
                    </div>
                </div>
            </div>
        ),
        size
    )
}