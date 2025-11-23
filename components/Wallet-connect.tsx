"use client"

import { ConnectButton } from '@rainbow-me/rainbowkit';

export function WalletConnect() {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
            }) => {
                const ready = mounted;
                const connected = ready && account && chain;

                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            style: {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button
                                        onClick={openConnectModal}
                                        type="button"
                                        className="relative bg-black text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-900 transition-all shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-black/60 ring-1 ring-white/20 hover:ring-white/30"
                                    >
                                        <span className="relative z-10">Connect Wallet</span>
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                );
                            }

                            if (chain.unsupported) {
                                return (
                                    <button
                                        onClick={openChainModal}
                                        type="button"
                                        className="bg-red-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-red-700 transition-all shadow-lg shadow-red-500/50 ring-1 ring-red-400/30"
                                    >
                                        Wrong network
                                    </button>
                                );
                            }

                            return (
                                <div className="flex gap-2">
                                    <button
                                        onClick={openChainModal}
                                        type="button"
                                        className="bg-black text-white px-4 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-900 transition-all shadow-lg shadow-black/50 ring-1 ring-white/20 hover:ring-white/30 flex items-center gap-2"
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background: chain.iconBackground,
                                                    width: 20,
                                                    height: 20,
                                                    borderRadius: 999,
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={chain.name ?? 'Chain icon'}
                                                        src={chain.iconUrl}
                                                        style={{ width: 20, height: 20 }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        {chain.name}
                                    </button>

                                    <button
                                        onClick={openAccountModal}
                                        type="button"
                                        className="bg-black text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-900 transition-all shadow-lg shadow-black/50 ring-1 ring-white/20 hover:ring-white/30"
                                    >
                                        {account.displayName}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
}